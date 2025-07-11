# `bedrockagentAgentActionGroup` Submodule <a name="`bedrockagentAgentActionGroup` Submodule" id="@cdktf/provider-aws.bedrockagentAgentActionGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentAgentActionGroup <a name="BedrockagentAgentActionGroup" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent_action_group aws_bedrockagent_agent_action_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.Initializer"></a>

```typescript
import { bedrockagentAgentActionGroup } from '@cdktf/provider-aws'

new bedrockagentAgentActionGroup.BedrockagentAgentActionGroup(scope: Construct, id: string, config: BedrockagentAgentActionGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig">BedrockagentAgentActionGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig">BedrockagentAgentActionGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.putActionGroupExecutor">putActionGroupExecutor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.putApiSchema">putApiSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.putFunctionSchema">putFunctionSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.resetActionGroupExecutor">resetActionGroupExecutor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.resetActionGroupState">resetActionGroupState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.resetApiSchema">resetApiSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.resetFunctionSchema">resetFunctionSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.resetParentActionGroupSignature">resetParentActionGroupSignature</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.resetPrepareAgent">resetPrepareAgent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.resetSkipResourceInUseCheck">resetSkipResourceInUseCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putActionGroupExecutor` <a name="putActionGroupExecutor" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.putActionGroupExecutor"></a>

```typescript
public putActionGroupExecutor(value: IResolvable | BedrockagentAgentActionGroupActionGroupExecutor[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.putActionGroupExecutor.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutor">BedrockagentAgentActionGroupActionGroupExecutor</a>[]

---

##### `putApiSchema` <a name="putApiSchema" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.putApiSchema"></a>

```typescript
public putApiSchema(value: IResolvable | BedrockagentAgentActionGroupApiSchema[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.putApiSchema.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchema">BedrockagentAgentActionGroupApiSchema</a>[]

---

##### `putFunctionSchema` <a name="putFunctionSchema" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.putFunctionSchema"></a>

```typescript
public putFunctionSchema(value: IResolvable | BedrockagentAgentActionGroupFunctionSchema[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.putFunctionSchema.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchema">BedrockagentAgentActionGroupFunctionSchema</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.putTimeouts"></a>

```typescript
public putTimeouts(value: BedrockagentAgentActionGroupTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeouts">BedrockagentAgentActionGroupTimeouts</a>

---

##### `resetActionGroupExecutor` <a name="resetActionGroupExecutor" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.resetActionGroupExecutor"></a>

```typescript
public resetActionGroupExecutor(): void
```

##### `resetActionGroupState` <a name="resetActionGroupState" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.resetActionGroupState"></a>

```typescript
public resetActionGroupState(): void
```

##### `resetApiSchema` <a name="resetApiSchema" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.resetApiSchema"></a>

```typescript
public resetApiSchema(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFunctionSchema` <a name="resetFunctionSchema" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.resetFunctionSchema"></a>

```typescript
public resetFunctionSchema(): void
```

##### `resetParentActionGroupSignature` <a name="resetParentActionGroupSignature" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.resetParentActionGroupSignature"></a>

```typescript
public resetParentActionGroupSignature(): void
```

##### `resetPrepareAgent` <a name="resetPrepareAgent" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.resetPrepareAgent"></a>

```typescript
public resetPrepareAgent(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetSkipResourceInUseCheck` <a name="resetSkipResourceInUseCheck" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.resetSkipResourceInUseCheck"></a>

```typescript
public resetSkipResourceInUseCheck(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BedrockagentAgentActionGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.isConstruct"></a>

```typescript
import { bedrockagentAgentActionGroup } from '@cdktf/provider-aws'

bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.isTerraformElement"></a>

```typescript
import { bedrockagentAgentActionGroup } from '@cdktf/provider-aws'

bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.isTerraformResource"></a>

```typescript
import { bedrockagentAgentActionGroup } from '@cdktf/provider-aws'

bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.generateConfigForImport"></a>

```typescript
import { bedrockagentAgentActionGroup } from '@cdktf/provider-aws'

bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a BedrockagentAgentActionGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BedrockagentAgentActionGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BedrockagentAgentActionGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent_action_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BedrockagentAgentActionGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.actionGroupExecutor">actionGroupExecutor</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList">BedrockagentAgentActionGroupActionGroupExecutorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.actionGroupId">actionGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.apiSchema">apiSchema</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList">BedrockagentAgentActionGroupApiSchemaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.functionSchema">functionSchema</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList">BedrockagentAgentActionGroupFunctionSchemaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference">BedrockagentAgentActionGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.actionGroupExecutorInput">actionGroupExecutorInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutor">BedrockagentAgentActionGroupActionGroupExecutor</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.actionGroupNameInput">actionGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.actionGroupStateInput">actionGroupStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.agentIdInput">agentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.agentVersionInput">agentVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.apiSchemaInput">apiSchemaInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchema">BedrockagentAgentActionGroupApiSchema</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.functionSchemaInput">functionSchemaInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchema">BedrockagentAgentActionGroupFunctionSchema</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.parentActionGroupSignatureInput">parentActionGroupSignatureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.prepareAgentInput">prepareAgentInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.skipResourceInUseCheckInput">skipResourceInUseCheckInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeouts">BedrockagentAgentActionGroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.actionGroupName">actionGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.actionGroupState">actionGroupState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.agentId">agentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.agentVersion">agentVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.parentActionGroupSignature">parentActionGroupSignature</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.prepareAgent">prepareAgent</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.skipResourceInUseCheck">skipResourceInUseCheck</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `actionGroupExecutor`<sup>Required</sup> <a name="actionGroupExecutor" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.actionGroupExecutor"></a>

```typescript
public readonly actionGroupExecutor: BedrockagentAgentActionGroupActionGroupExecutorList;
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList">BedrockagentAgentActionGroupActionGroupExecutorList</a>

---

##### `actionGroupId`<sup>Required</sup> <a name="actionGroupId" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.actionGroupId"></a>

```typescript
public readonly actionGroupId: string;
```

- *Type:* string

---

##### `apiSchema`<sup>Required</sup> <a name="apiSchema" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.apiSchema"></a>

```typescript
public readonly apiSchema: BedrockagentAgentActionGroupApiSchemaList;
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList">BedrockagentAgentActionGroupApiSchemaList</a>

---

##### `functionSchema`<sup>Required</sup> <a name="functionSchema" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.functionSchema"></a>

```typescript
public readonly functionSchema: BedrockagentAgentActionGroupFunctionSchemaList;
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList">BedrockagentAgentActionGroupFunctionSchemaList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.timeouts"></a>

```typescript
public readonly timeouts: BedrockagentAgentActionGroupTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference">BedrockagentAgentActionGroupTimeoutsOutputReference</a>

---

##### `actionGroupExecutorInput`<sup>Optional</sup> <a name="actionGroupExecutorInput" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.actionGroupExecutorInput"></a>

```typescript
public readonly actionGroupExecutorInput: IResolvable | BedrockagentAgentActionGroupActionGroupExecutor[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutor">BedrockagentAgentActionGroupActionGroupExecutor</a>[]

---

##### `actionGroupNameInput`<sup>Optional</sup> <a name="actionGroupNameInput" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.actionGroupNameInput"></a>

```typescript
public readonly actionGroupNameInput: string;
```

- *Type:* string

---

##### `actionGroupStateInput`<sup>Optional</sup> <a name="actionGroupStateInput" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.actionGroupStateInput"></a>

```typescript
public readonly actionGroupStateInput: string;
```

- *Type:* string

---

##### `agentIdInput`<sup>Optional</sup> <a name="agentIdInput" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.agentIdInput"></a>

```typescript
public readonly agentIdInput: string;
```

- *Type:* string

---

##### `agentVersionInput`<sup>Optional</sup> <a name="agentVersionInput" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.agentVersionInput"></a>

```typescript
public readonly agentVersionInput: string;
```

- *Type:* string

---

##### `apiSchemaInput`<sup>Optional</sup> <a name="apiSchemaInput" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.apiSchemaInput"></a>

```typescript
public readonly apiSchemaInput: IResolvable | BedrockagentAgentActionGroupApiSchema[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchema">BedrockagentAgentActionGroupApiSchema</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `functionSchemaInput`<sup>Optional</sup> <a name="functionSchemaInput" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.functionSchemaInput"></a>

```typescript
public readonly functionSchemaInput: IResolvable | BedrockagentAgentActionGroupFunctionSchema[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchema">BedrockagentAgentActionGroupFunctionSchema</a>[]

---

##### `parentActionGroupSignatureInput`<sup>Optional</sup> <a name="parentActionGroupSignatureInput" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.parentActionGroupSignatureInput"></a>

```typescript
public readonly parentActionGroupSignatureInput: string;
```

- *Type:* string

---

##### `prepareAgentInput`<sup>Optional</sup> <a name="prepareAgentInput" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.prepareAgentInput"></a>

```typescript
public readonly prepareAgentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `skipResourceInUseCheckInput`<sup>Optional</sup> <a name="skipResourceInUseCheckInput" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.skipResourceInUseCheckInput"></a>

```typescript
public readonly skipResourceInUseCheckInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | BedrockagentAgentActionGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeouts">BedrockagentAgentActionGroupTimeouts</a>

---

##### `actionGroupName`<sup>Required</sup> <a name="actionGroupName" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.actionGroupName"></a>

```typescript
public readonly actionGroupName: string;
```

- *Type:* string

---

##### `actionGroupState`<sup>Required</sup> <a name="actionGroupState" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.actionGroupState"></a>

```typescript
public readonly actionGroupState: string;
```

- *Type:* string

---

##### `agentId`<sup>Required</sup> <a name="agentId" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.agentId"></a>

```typescript
public readonly agentId: string;
```

- *Type:* string

---

##### `agentVersion`<sup>Required</sup> <a name="agentVersion" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.agentVersion"></a>

```typescript
public readonly agentVersion: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `parentActionGroupSignature`<sup>Required</sup> <a name="parentActionGroupSignature" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.parentActionGroupSignature"></a>

```typescript
public readonly parentActionGroupSignature: string;
```

- *Type:* string

---

##### `prepareAgent`<sup>Required</sup> <a name="prepareAgent" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.prepareAgent"></a>

```typescript
public readonly prepareAgent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `skipResourceInUseCheck`<sup>Required</sup> <a name="skipResourceInUseCheck" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.skipResourceInUseCheck"></a>

```typescript
public readonly skipResourceInUseCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentAgentActionGroupActionGroupExecutor <a name="BedrockagentAgentActionGroupActionGroupExecutor" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutor.Initializer"></a>

```typescript
import { bedrockagentAgentActionGroup } from '@cdktf/provider-aws'

const bedrockagentAgentActionGroupActionGroupExecutor: bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutor = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutor.property.customControl">customControl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent_action_group#custom_control BedrockagentAgentActionGroup#custom_control}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutor.property.lambda">lambda</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent_action_group#lambda BedrockagentAgentActionGroup#lambda}. |

---

##### `customControl`<sup>Optional</sup> <a name="customControl" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutor.property.customControl"></a>

```typescript
public readonly customControl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent_action_group#custom_control BedrockagentAgentActionGroup#custom_control}.

---

##### `lambda`<sup>Optional</sup> <a name="lambda" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutor.property.lambda"></a>

```typescript
public readonly lambda: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent_action_group#lambda BedrockagentAgentActionGroup#lambda}.

---

### BedrockagentAgentActionGroupApiSchema <a name="BedrockagentAgentActionGroupApiSchema" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchema"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchema.Initializer"></a>

```typescript
import { bedrockagentAgentActionGroup } from '@cdktf/provider-aws'

const bedrockagentAgentActionGroupApiSchema: bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchema = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchema.property.payload">payload</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent_action_group#payload BedrockagentAgentActionGroup#payload}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchema.property.s3">s3</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3">BedrockagentAgentActionGroupApiSchemaS3</a>[]</code> | s3 block. |

---

##### `payload`<sup>Optional</sup> <a name="payload" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchema.property.payload"></a>

```typescript
public readonly payload: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent_action_group#payload BedrockagentAgentActionGroup#payload}.

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchema.property.s3"></a>

```typescript
public readonly s3: IResolvable | BedrockagentAgentActionGroupApiSchemaS3[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3">BedrockagentAgentActionGroupApiSchemaS3</a>[]

s3 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent_action_group#s3 BedrockagentAgentActionGroup#s3}

---

### BedrockagentAgentActionGroupApiSchemaS3 <a name="BedrockagentAgentActionGroupApiSchemaS3" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3.Initializer"></a>

```typescript
import { bedrockagentAgentActionGroup } from '@cdktf/provider-aws'

const bedrockagentAgentActionGroupApiSchemaS3: bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3.property.s3BucketName">s3BucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent_action_group#s3_bucket_name BedrockagentAgentActionGroup#s3_bucket_name}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3.property.s3ObjectKey">s3ObjectKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent_action_group#s3_object_key BedrockagentAgentActionGroup#s3_object_key}. |

---

##### `s3BucketName`<sup>Optional</sup> <a name="s3BucketName" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3.property.s3BucketName"></a>

```typescript
public readonly s3BucketName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent_action_group#s3_bucket_name BedrockagentAgentActionGroup#s3_bucket_name}.

---

##### `s3ObjectKey`<sup>Optional</sup> <a name="s3ObjectKey" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3.property.s3ObjectKey"></a>

```typescript
public readonly s3ObjectKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent_action_group#s3_object_key BedrockagentAgentActionGroup#s3_object_key}.

---

### BedrockagentAgentActionGroupConfig <a name="BedrockagentAgentActionGroupConfig" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.Initializer"></a>

```typescript
import { bedrockagentAgentActionGroup } from '@cdktf/provider-aws'

const bedrockagentAgentActionGroupConfig: bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.actionGroupName">actionGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent_action_group#action_group_name BedrockagentAgentActionGroup#action_group_name}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.agentId">agentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent_action_group#agent_id BedrockagentAgentActionGroup#agent_id}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.agentVersion">agentVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent_action_group#agent_version BedrockagentAgentActionGroup#agent_version}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.actionGroupExecutor">actionGroupExecutor</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutor">BedrockagentAgentActionGroupActionGroupExecutor</a>[]</code> | action_group_executor block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.actionGroupState">actionGroupState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent_action_group#action_group_state BedrockagentAgentActionGroup#action_group_state}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.apiSchema">apiSchema</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchema">BedrockagentAgentActionGroupApiSchema</a>[]</code> | api_schema block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent_action_group#description BedrockagentAgentActionGroup#description}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.functionSchema">functionSchema</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchema">BedrockagentAgentActionGroupFunctionSchema</a>[]</code> | function_schema block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.parentActionGroupSignature">parentActionGroupSignature</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent_action_group#parent_action_group_signature BedrockagentAgentActionGroup#parent_action_group_signature}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.prepareAgent">prepareAgent</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent_action_group#prepare_agent BedrockagentAgentActionGroup#prepare_agent}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.skipResourceInUseCheck">skipResourceInUseCheck</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent_action_group#skip_resource_in_use_check BedrockagentAgentActionGroup#skip_resource_in_use_check}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeouts">BedrockagentAgentActionGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `actionGroupName`<sup>Required</sup> <a name="actionGroupName" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.actionGroupName"></a>

```typescript
public readonly actionGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent_action_group#action_group_name BedrockagentAgentActionGroup#action_group_name}.

---

##### `agentId`<sup>Required</sup> <a name="agentId" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.agentId"></a>

```typescript
public readonly agentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent_action_group#agent_id BedrockagentAgentActionGroup#agent_id}.

---

##### `agentVersion`<sup>Required</sup> <a name="agentVersion" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.agentVersion"></a>

```typescript
public readonly agentVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent_action_group#agent_version BedrockagentAgentActionGroup#agent_version}.

---

##### `actionGroupExecutor`<sup>Optional</sup> <a name="actionGroupExecutor" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.actionGroupExecutor"></a>

```typescript
public readonly actionGroupExecutor: IResolvable | BedrockagentAgentActionGroupActionGroupExecutor[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutor">BedrockagentAgentActionGroupActionGroupExecutor</a>[]

action_group_executor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent_action_group#action_group_executor BedrockagentAgentActionGroup#action_group_executor}

---

##### `actionGroupState`<sup>Optional</sup> <a name="actionGroupState" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.actionGroupState"></a>

```typescript
public readonly actionGroupState: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent_action_group#action_group_state BedrockagentAgentActionGroup#action_group_state}.

---

##### `apiSchema`<sup>Optional</sup> <a name="apiSchema" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.apiSchema"></a>

```typescript
public readonly apiSchema: IResolvable | BedrockagentAgentActionGroupApiSchema[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchema">BedrockagentAgentActionGroupApiSchema</a>[]

api_schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent_action_group#api_schema BedrockagentAgentActionGroup#api_schema}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent_action_group#description BedrockagentAgentActionGroup#description}.

---

##### `functionSchema`<sup>Optional</sup> <a name="functionSchema" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.functionSchema"></a>

```typescript
public readonly functionSchema: IResolvable | BedrockagentAgentActionGroupFunctionSchema[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchema">BedrockagentAgentActionGroupFunctionSchema</a>[]

function_schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent_action_group#function_schema BedrockagentAgentActionGroup#function_schema}

---

##### `parentActionGroupSignature`<sup>Optional</sup> <a name="parentActionGroupSignature" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.parentActionGroupSignature"></a>

```typescript
public readonly parentActionGroupSignature: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent_action_group#parent_action_group_signature BedrockagentAgentActionGroup#parent_action_group_signature}.

---

##### `prepareAgent`<sup>Optional</sup> <a name="prepareAgent" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.prepareAgent"></a>

```typescript
public readonly prepareAgent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent_action_group#prepare_agent BedrockagentAgentActionGroup#prepare_agent}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent_action_group#region BedrockagentAgentActionGroup#region}

---

##### `skipResourceInUseCheck`<sup>Optional</sup> <a name="skipResourceInUseCheck" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.skipResourceInUseCheck"></a>

```typescript
public readonly skipResourceInUseCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent_action_group#skip_resource_in_use_check BedrockagentAgentActionGroup#skip_resource_in_use_check}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.timeouts"></a>

```typescript
public readonly timeouts: BedrockagentAgentActionGroupTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeouts">BedrockagentAgentActionGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent_action_group#timeouts BedrockagentAgentActionGroup#timeouts}

---

### BedrockagentAgentActionGroupFunctionSchema <a name="BedrockagentAgentActionGroupFunctionSchema" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchema"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchema.Initializer"></a>

```typescript
import { bedrockagentAgentActionGroup } from '@cdktf/provider-aws'

const bedrockagentAgentActionGroupFunctionSchema: bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchema = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchema.property.memberFunctions">memberFunctions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctions">BedrockagentAgentActionGroupFunctionSchemaMemberFunctions</a>[]</code> | member_functions block. |

---

##### `memberFunctions`<sup>Optional</sup> <a name="memberFunctions" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchema.property.memberFunctions"></a>

```typescript
public readonly memberFunctions: IResolvable | BedrockagentAgentActionGroupFunctionSchemaMemberFunctions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctions">BedrockagentAgentActionGroupFunctionSchemaMemberFunctions</a>[]

member_functions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent_action_group#member_functions BedrockagentAgentActionGroup#member_functions}

---

### BedrockagentAgentActionGroupFunctionSchemaMemberFunctions <a name="BedrockagentAgentActionGroupFunctionSchemaMemberFunctions" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctions.Initializer"></a>

```typescript
import { bedrockagentAgentActionGroup } from '@cdktf/provider-aws'

const bedrockagentAgentActionGroupFunctionSchemaMemberFunctions: bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctions.property.functions">functions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions">BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions</a>[]</code> | functions block. |

---

##### `functions`<sup>Optional</sup> <a name="functions" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctions.property.functions"></a>

```typescript
public readonly functions: IResolvable | BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions">BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions</a>[]

functions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent_action_group#functions BedrockagentAgentActionGroup#functions}

---

### BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions <a name="BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions.Initializer"></a>

```typescript
import { bedrockagentAgentActionGroup } from '@cdktf/provider-aws'

const bedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions: bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent_action_group#name BedrockagentAgentActionGroup#name}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent_action_group#description BedrockagentAgentActionGroup#description}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions.property.parameters">parameters</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters">BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters</a>[]</code> | parameters block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent_action_group#name BedrockagentAgentActionGroup#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent_action_group#description BedrockagentAgentActionGroup#description}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions.property.parameters"></a>

```typescript
public readonly parameters: IResolvable | BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters">BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters</a>[]

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent_action_group#parameters BedrockagentAgentActionGroup#parameters}

---

### BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters <a name="BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters.Initializer"></a>

```typescript
import { bedrockagentAgentActionGroup } from '@cdktf/provider-aws'

const bedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters: bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters.property.mapBlockKey">mapBlockKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent_action_group#map_block_key BedrockagentAgentActionGroup#map_block_key}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent_action_group#type BedrockagentAgentActionGroup#type}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent_action_group#description BedrockagentAgentActionGroup#description}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters.property.required">required</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent_action_group#required BedrockagentAgentActionGroup#required}. |

---

##### `mapBlockKey`<sup>Required</sup> <a name="mapBlockKey" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters.property.mapBlockKey"></a>

```typescript
public readonly mapBlockKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent_action_group#map_block_key BedrockagentAgentActionGroup#map_block_key}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent_action_group#type BedrockagentAgentActionGroup#type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent_action_group#description BedrockagentAgentActionGroup#description}.

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters.property.required"></a>

```typescript
public readonly required: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent_action_group#required BedrockagentAgentActionGroup#required}.

---

### BedrockagentAgentActionGroupTimeouts <a name="BedrockagentAgentActionGroupTimeouts" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeouts.Initializer"></a>

```typescript
import { bedrockagentAgentActionGroup } from '@cdktf/provider-aws'

const bedrockagentAgentActionGroupTimeouts: bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeouts.property.update">update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent_action_group#create BedrockagentAgentActionGroup#create}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent_action_group#update BedrockagentAgentActionGroup#update}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockagentAgentActionGroupActionGroupExecutorList <a name="BedrockagentAgentActionGroupActionGroupExecutorList" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList.Initializer"></a>

```typescript
import { bedrockagentAgentActionGroup } from '@cdktf/provider-aws'

new bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList.get"></a>

```typescript
public get(index: number): BedrockagentAgentActionGroupActionGroupExecutorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutor">BedrockagentAgentActionGroupActionGroupExecutor</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentAgentActionGroupActionGroupExecutor[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutor">BedrockagentAgentActionGroupActionGroupExecutor</a>[]

---


### BedrockagentAgentActionGroupActionGroupExecutorOutputReference <a name="BedrockagentAgentActionGroupActionGroupExecutorOutputReference" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.Initializer"></a>

```typescript
import { bedrockagentAgentActionGroup } from '@cdktf/provider-aws'

new bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.resetCustomControl">resetCustomControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.resetLambda">resetLambda</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustomControl` <a name="resetCustomControl" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.resetCustomControl"></a>

```typescript
public resetCustomControl(): void
```

##### `resetLambda` <a name="resetLambda" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.resetLambda"></a>

```typescript
public resetLambda(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.property.customControlInput">customControlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.property.lambdaInput">lambdaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.property.customControl">customControl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.property.lambda">lambda</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutor">BedrockagentAgentActionGroupActionGroupExecutor</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customControlInput`<sup>Optional</sup> <a name="customControlInput" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.property.customControlInput"></a>

```typescript
public readonly customControlInput: string;
```

- *Type:* string

---

##### `lambdaInput`<sup>Optional</sup> <a name="lambdaInput" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.property.lambdaInput"></a>

```typescript
public readonly lambdaInput: string;
```

- *Type:* string

---

##### `customControl`<sup>Required</sup> <a name="customControl" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.property.customControl"></a>

```typescript
public readonly customControl: string;
```

- *Type:* string

---

##### `lambda`<sup>Required</sup> <a name="lambda" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.property.lambda"></a>

```typescript
public readonly lambda: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentAgentActionGroupActionGroupExecutor;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutor">BedrockagentAgentActionGroupActionGroupExecutor</a>

---


### BedrockagentAgentActionGroupApiSchemaList <a name="BedrockagentAgentActionGroupApiSchemaList" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList.Initializer"></a>

```typescript
import { bedrockagentAgentActionGroup } from '@cdktf/provider-aws'

new bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList.get"></a>

```typescript
public get(index: number): BedrockagentAgentActionGroupApiSchemaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchema">BedrockagentAgentActionGroupApiSchema</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentAgentActionGroupApiSchema[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchema">BedrockagentAgentActionGroupApiSchema</a>[]

---


### BedrockagentAgentActionGroupApiSchemaOutputReference <a name="BedrockagentAgentActionGroupApiSchemaOutputReference" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.Initializer"></a>

```typescript
import { bedrockagentAgentActionGroup } from '@cdktf/provider-aws'

new bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.putS3">putS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.resetPayload">resetPayload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.resetS3">resetS3</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3` <a name="putS3" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.putS3"></a>

```typescript
public putS3(value: IResolvable | BedrockagentAgentActionGroupApiSchemaS3[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.putS3.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3">BedrockagentAgentActionGroupApiSchemaS3</a>[]

---

##### `resetPayload` <a name="resetPayload" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.resetPayload"></a>

```typescript
public resetPayload(): void
```

##### `resetS3` <a name="resetS3" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.resetS3"></a>

```typescript
public resetS3(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List">BedrockagentAgentActionGroupApiSchemaS3List</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.property.payloadInput">payloadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.property.s3Input">s3Input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3">BedrockagentAgentActionGroupApiSchemaS3</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.property.payload">payload</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchema">BedrockagentAgentActionGroupApiSchema</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.property.s3"></a>

```typescript
public readonly s3: BedrockagentAgentActionGroupApiSchemaS3List;
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List">BedrockagentAgentActionGroupApiSchemaS3List</a>

---

##### `payloadInput`<sup>Optional</sup> <a name="payloadInput" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.property.payloadInput"></a>

```typescript
public readonly payloadInput: string;
```

- *Type:* string

---

##### `s3Input`<sup>Optional</sup> <a name="s3Input" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.property.s3Input"></a>

```typescript
public readonly s3Input: IResolvable | BedrockagentAgentActionGroupApiSchemaS3[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3">BedrockagentAgentActionGroupApiSchemaS3</a>[]

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.property.payload"></a>

```typescript
public readonly payload: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentAgentActionGroupApiSchema;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchema">BedrockagentAgentActionGroupApiSchema</a>

---


### BedrockagentAgentActionGroupApiSchemaS3List <a name="BedrockagentAgentActionGroupApiSchemaS3List" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List.Initializer"></a>

```typescript
import { bedrockagentAgentActionGroup } from '@cdktf/provider-aws'

new bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List.get"></a>

```typescript
public get(index: number): BedrockagentAgentActionGroupApiSchemaS3OutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3">BedrockagentAgentActionGroupApiSchemaS3</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentAgentActionGroupApiSchemaS3[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3">BedrockagentAgentActionGroupApiSchemaS3</a>[]

---


### BedrockagentAgentActionGroupApiSchemaS3OutputReference <a name="BedrockagentAgentActionGroupApiSchemaS3OutputReference" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.Initializer"></a>

```typescript
import { bedrockagentAgentActionGroup } from '@cdktf/provider-aws'

new bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.resetS3BucketName">resetS3BucketName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.resetS3ObjectKey">resetS3ObjectKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetS3BucketName` <a name="resetS3BucketName" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.resetS3BucketName"></a>

```typescript
public resetS3BucketName(): void
```

##### `resetS3ObjectKey` <a name="resetS3ObjectKey" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.resetS3ObjectKey"></a>

```typescript
public resetS3ObjectKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.property.s3BucketNameInput">s3BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.property.s3ObjectKeyInput">s3ObjectKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.property.s3BucketName">s3BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.property.s3ObjectKey">s3ObjectKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3">BedrockagentAgentActionGroupApiSchemaS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3BucketNameInput`<sup>Optional</sup> <a name="s3BucketNameInput" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.property.s3BucketNameInput"></a>

```typescript
public readonly s3BucketNameInput: string;
```

- *Type:* string

---

##### `s3ObjectKeyInput`<sup>Optional</sup> <a name="s3ObjectKeyInput" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.property.s3ObjectKeyInput"></a>

```typescript
public readonly s3ObjectKeyInput: string;
```

- *Type:* string

---

##### `s3BucketName`<sup>Required</sup> <a name="s3BucketName" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.property.s3BucketName"></a>

```typescript
public readonly s3BucketName: string;
```

- *Type:* string

---

##### `s3ObjectKey`<sup>Required</sup> <a name="s3ObjectKey" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.property.s3ObjectKey"></a>

```typescript
public readonly s3ObjectKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentAgentActionGroupApiSchemaS3;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3">BedrockagentAgentActionGroupApiSchemaS3</a>

---


### BedrockagentAgentActionGroupFunctionSchemaList <a name="BedrockagentAgentActionGroupFunctionSchemaList" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList.Initializer"></a>

```typescript
import { bedrockagentAgentActionGroup } from '@cdktf/provider-aws'

new bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList.get"></a>

```typescript
public get(index: number): BedrockagentAgentActionGroupFunctionSchemaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchema">BedrockagentAgentActionGroupFunctionSchema</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentAgentActionGroupFunctionSchema[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchema">BedrockagentAgentActionGroupFunctionSchema</a>[]

---


### BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList <a name="BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList.Initializer"></a>

```typescript
import { bedrockagentAgentActionGroup } from '@cdktf/provider-aws'

new bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList.get"></a>

```typescript
public get(index: number): BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions">BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions">BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions</a>[]

---


### BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference <a name="BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.Initializer"></a>

```typescript
import { bedrockagentAgentActionGroup } from '@cdktf/provider-aws'

new bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.putParameters">putParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.resetParameters">resetParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putParameters` <a name="putParameters" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.putParameters"></a>

```typescript
public putParameters(value: IResolvable | BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.putParameters.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters">BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.resetParameters"></a>

```typescript
public resetParameters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList">BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.property.parametersInput">parametersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters">BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions">BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.property.parameters"></a>

```typescript
public readonly parameters: BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList;
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList">BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.property.parametersInput"></a>

```typescript
public readonly parametersInput: IResolvable | BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters">BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters</a>[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions">BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions</a>

---


### BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList <a name="BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList.Initializer"></a>

```typescript
import { bedrockagentAgentActionGroup } from '@cdktf/provider-aws'

new bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList.get"></a>

```typescript
public get(index: number): BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters">BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters">BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters</a>[]

---


### BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference <a name="BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.Initializer"></a>

```typescript
import { bedrockagentAgentActionGroup } from '@cdktf/provider-aws'

new bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.resetRequired">resetRequired</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetRequired` <a name="resetRequired" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.resetRequired"></a>

```typescript
public resetRequired(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.property.mapBlockKeyInput">mapBlockKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.property.requiredInput">requiredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.property.mapBlockKey">mapBlockKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.property.required">required</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters">BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `mapBlockKeyInput`<sup>Optional</sup> <a name="mapBlockKeyInput" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.property.mapBlockKeyInput"></a>

```typescript
public readonly mapBlockKeyInput: string;
```

- *Type:* string

---

##### `requiredInput`<sup>Optional</sup> <a name="requiredInput" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.property.requiredInput"></a>

```typescript
public readonly requiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `mapBlockKey`<sup>Required</sup> <a name="mapBlockKey" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.property.mapBlockKey"></a>

```typescript
public readonly mapBlockKey: string;
```

- *Type:* string

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.property.required"></a>

```typescript
public readonly required: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters">BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters</a>

---


### BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList <a name="BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList.Initializer"></a>

```typescript
import { bedrockagentAgentActionGroup } from '@cdktf/provider-aws'

new bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList.get"></a>

```typescript
public get(index: number): BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctions">BedrockagentAgentActionGroupFunctionSchemaMemberFunctions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentAgentActionGroupFunctionSchemaMemberFunctions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctions">BedrockagentAgentActionGroupFunctionSchemaMemberFunctions</a>[]

---


### BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference <a name="BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.Initializer"></a>

```typescript
import { bedrockagentAgentActionGroup } from '@cdktf/provider-aws'

new bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.putFunctions">putFunctions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.resetFunctions">resetFunctions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFunctions` <a name="putFunctions" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.putFunctions"></a>

```typescript
public putFunctions(value: IResolvable | BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.putFunctions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions">BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions</a>[]

---

##### `resetFunctions` <a name="resetFunctions" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.resetFunctions"></a>

```typescript
public resetFunctions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.property.functions">functions</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList">BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.property.functionsInput">functionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions">BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctions">BedrockagentAgentActionGroupFunctionSchemaMemberFunctions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `functions`<sup>Required</sup> <a name="functions" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.property.functions"></a>

```typescript
public readonly functions: BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList;
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList">BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList</a>

---

##### `functionsInput`<sup>Optional</sup> <a name="functionsInput" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.property.functionsInput"></a>

```typescript
public readonly functionsInput: IResolvable | BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions">BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentAgentActionGroupFunctionSchemaMemberFunctions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctions">BedrockagentAgentActionGroupFunctionSchemaMemberFunctions</a>

---


### BedrockagentAgentActionGroupFunctionSchemaOutputReference <a name="BedrockagentAgentActionGroupFunctionSchemaOutputReference" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.Initializer"></a>

```typescript
import { bedrockagentAgentActionGroup } from '@cdktf/provider-aws'

new bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.putMemberFunctions">putMemberFunctions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.resetMemberFunctions">resetMemberFunctions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMemberFunctions` <a name="putMemberFunctions" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.putMemberFunctions"></a>

```typescript
public putMemberFunctions(value: IResolvable | BedrockagentAgentActionGroupFunctionSchemaMemberFunctions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.putMemberFunctions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctions">BedrockagentAgentActionGroupFunctionSchemaMemberFunctions</a>[]

---

##### `resetMemberFunctions` <a name="resetMemberFunctions" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.resetMemberFunctions"></a>

```typescript
public resetMemberFunctions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.property.memberFunctions">memberFunctions</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList">BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.property.memberFunctionsInput">memberFunctionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctions">BedrockagentAgentActionGroupFunctionSchemaMemberFunctions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchema">BedrockagentAgentActionGroupFunctionSchema</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `memberFunctions`<sup>Required</sup> <a name="memberFunctions" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.property.memberFunctions"></a>

```typescript
public readonly memberFunctions: BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList;
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList">BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList</a>

---

##### `memberFunctionsInput`<sup>Optional</sup> <a name="memberFunctionsInput" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.property.memberFunctionsInput"></a>

```typescript
public readonly memberFunctionsInput: IResolvable | BedrockagentAgentActionGroupFunctionSchemaMemberFunctions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctions">BedrockagentAgentActionGroupFunctionSchemaMemberFunctions</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentAgentActionGroupFunctionSchema;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchema">BedrockagentAgentActionGroupFunctionSchema</a>

---


### BedrockagentAgentActionGroupTimeoutsOutputReference <a name="BedrockagentAgentActionGroupTimeoutsOutputReference" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.Initializer"></a>

```typescript
import { bedrockagentAgentActionGroup } from '@cdktf/provider-aws'

new bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeouts">BedrockagentAgentActionGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentAgentActionGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeouts">BedrockagentAgentActionGroupTimeouts</a>

---



