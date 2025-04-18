# `chimeVoiceConnectorStreaming` Submodule <a name="`chimeVoiceConnectorStreaming` Submodule" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChimeVoiceConnectorStreaming <a name="ChimeVoiceConnectorStreaming" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/chime_voice_connector_streaming aws_chime_voice_connector_streaming}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.Initializer"></a>

```typescript
import { chimeVoiceConnectorStreaming } from '@cdktf/provider-aws'

new chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming(scope: Construct, id: string, config: ChimeVoiceConnectorStreamingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig">ChimeVoiceConnectorStreamingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig">ChimeVoiceConnectorStreamingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.putMediaInsightsConfiguration">putMediaInsightsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.resetMediaInsightsConfiguration">resetMediaInsightsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.resetStreamingNotificationTargets">resetStreamingNotificationTargets</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMediaInsightsConfiguration` <a name="putMediaInsightsConfiguration" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.putMediaInsightsConfiguration"></a>

```typescript
public putMediaInsightsConfiguration(value: ChimeVoiceConnectorStreamingMediaInsightsConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.putMediaInsightsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfiguration">ChimeVoiceConnectorStreamingMediaInsightsConfiguration</a>

---

##### `resetDisabled` <a name="resetDisabled" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.resetDisabled"></a>

```typescript
public resetDisabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMediaInsightsConfiguration` <a name="resetMediaInsightsConfiguration" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.resetMediaInsightsConfiguration"></a>

```typescript
public resetMediaInsightsConfiguration(): void
```

##### `resetStreamingNotificationTargets` <a name="resetStreamingNotificationTargets" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.resetStreamingNotificationTargets"></a>

```typescript
public resetStreamingNotificationTargets(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ChimeVoiceConnectorStreaming resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.isConstruct"></a>

```typescript
import { chimeVoiceConnectorStreaming } from '@cdktf/provider-aws'

chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.isTerraformElement"></a>

```typescript
import { chimeVoiceConnectorStreaming } from '@cdktf/provider-aws'

chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.isTerraformResource"></a>

```typescript
import { chimeVoiceConnectorStreaming } from '@cdktf/provider-aws'

chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.generateConfigForImport"></a>

```typescript
import { chimeVoiceConnectorStreaming } from '@cdktf/provider-aws'

chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ChimeVoiceConnectorStreaming resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ChimeVoiceConnectorStreaming to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ChimeVoiceConnectorStreaming that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/chime_voice_connector_streaming#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ChimeVoiceConnectorStreaming to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.mediaInsightsConfiguration">mediaInsightsConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference">ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.dataRetentionInput">dataRetentionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.mediaInsightsConfigurationInput">mediaInsightsConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfiguration">ChimeVoiceConnectorStreamingMediaInsightsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.streamingNotificationTargetsInput">streamingNotificationTargetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.voiceConnectorIdInput">voiceConnectorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.dataRetention">dataRetention</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.streamingNotificationTargets">streamingNotificationTargets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.voiceConnectorId">voiceConnectorId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `mediaInsightsConfiguration`<sup>Required</sup> <a name="mediaInsightsConfiguration" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.mediaInsightsConfiguration"></a>

```typescript
public readonly mediaInsightsConfiguration: ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference">ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference</a>

---

##### `dataRetentionInput`<sup>Optional</sup> <a name="dataRetentionInput" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.dataRetentionInput"></a>

```typescript
public readonly dataRetentionInput: number;
```

- *Type:* number

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `mediaInsightsConfigurationInput`<sup>Optional</sup> <a name="mediaInsightsConfigurationInput" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.mediaInsightsConfigurationInput"></a>

```typescript
public readonly mediaInsightsConfigurationInput: ChimeVoiceConnectorStreamingMediaInsightsConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfiguration">ChimeVoiceConnectorStreamingMediaInsightsConfiguration</a>

---

##### `streamingNotificationTargetsInput`<sup>Optional</sup> <a name="streamingNotificationTargetsInput" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.streamingNotificationTargetsInput"></a>

```typescript
public readonly streamingNotificationTargetsInput: string[];
```

- *Type:* string[]

---

##### `voiceConnectorIdInput`<sup>Optional</sup> <a name="voiceConnectorIdInput" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.voiceConnectorIdInput"></a>

```typescript
public readonly voiceConnectorIdInput: string;
```

- *Type:* string

---

##### `dataRetention`<sup>Required</sup> <a name="dataRetention" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.dataRetention"></a>

```typescript
public readonly dataRetention: number;
```

- *Type:* number

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `streamingNotificationTargets`<sup>Required</sup> <a name="streamingNotificationTargets" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.streamingNotificationTargets"></a>

```typescript
public readonly streamingNotificationTargets: string[];
```

- *Type:* string[]

---

##### `voiceConnectorId`<sup>Required</sup> <a name="voiceConnectorId" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.voiceConnectorId"></a>

```typescript
public readonly voiceConnectorId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ChimeVoiceConnectorStreamingConfig <a name="ChimeVoiceConnectorStreamingConfig" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig.Initializer"></a>

```typescript
import { chimeVoiceConnectorStreaming } from '@cdktf/provider-aws'

const chimeVoiceConnectorStreamingConfig: chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig.property.dataRetention">dataRetention</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/chime_voice_connector_streaming#data_retention ChimeVoiceConnectorStreaming#data_retention}. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig.property.voiceConnectorId">voiceConnectorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/chime_voice_connector_streaming#voice_connector_id ChimeVoiceConnectorStreaming#voice_connector_id}. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/chime_voice_connector_streaming#disabled ChimeVoiceConnectorStreaming#disabled}. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/chime_voice_connector_streaming#id ChimeVoiceConnectorStreaming#id}. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig.property.mediaInsightsConfiguration">mediaInsightsConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfiguration">ChimeVoiceConnectorStreamingMediaInsightsConfiguration</a></code> | media_insights_configuration block. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig.property.streamingNotificationTargets">streamingNotificationTargets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/chime_voice_connector_streaming#streaming_notification_targets ChimeVoiceConnectorStreaming#streaming_notification_targets}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dataRetention`<sup>Required</sup> <a name="dataRetention" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig.property.dataRetention"></a>

```typescript
public readonly dataRetention: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/chime_voice_connector_streaming#data_retention ChimeVoiceConnectorStreaming#data_retention}.

---

##### `voiceConnectorId`<sup>Required</sup> <a name="voiceConnectorId" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig.property.voiceConnectorId"></a>

```typescript
public readonly voiceConnectorId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/chime_voice_connector_streaming#voice_connector_id ChimeVoiceConnectorStreaming#voice_connector_id}.

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/chime_voice_connector_streaming#disabled ChimeVoiceConnectorStreaming#disabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/chime_voice_connector_streaming#id ChimeVoiceConnectorStreaming#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mediaInsightsConfiguration`<sup>Optional</sup> <a name="mediaInsightsConfiguration" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig.property.mediaInsightsConfiguration"></a>

```typescript
public readonly mediaInsightsConfiguration: ChimeVoiceConnectorStreamingMediaInsightsConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfiguration">ChimeVoiceConnectorStreamingMediaInsightsConfiguration</a>

media_insights_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/chime_voice_connector_streaming#media_insights_configuration ChimeVoiceConnectorStreaming#media_insights_configuration}

---

##### `streamingNotificationTargets`<sup>Optional</sup> <a name="streamingNotificationTargets" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig.property.streamingNotificationTargets"></a>

```typescript
public readonly streamingNotificationTargets: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/chime_voice_connector_streaming#streaming_notification_targets ChimeVoiceConnectorStreaming#streaming_notification_targets}.

---

### ChimeVoiceConnectorStreamingMediaInsightsConfiguration <a name="ChimeVoiceConnectorStreamingMediaInsightsConfiguration" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfiguration.Initializer"></a>

```typescript
import { chimeVoiceConnectorStreaming } from '@cdktf/provider-aws'

const chimeVoiceConnectorStreamingMediaInsightsConfiguration: chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfiguration.property.configurationArn">configurationArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/chime_voice_connector_streaming#configuration_arn ChimeVoiceConnectorStreaming#configuration_arn}. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfiguration.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/chime_voice_connector_streaming#disabled ChimeVoiceConnectorStreaming#disabled}. |

---

##### `configurationArn`<sup>Optional</sup> <a name="configurationArn" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfiguration.property.configurationArn"></a>

```typescript
public readonly configurationArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/chime_voice_connector_streaming#configuration_arn ChimeVoiceConnectorStreaming#configuration_arn}.

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfiguration.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/chime_voice_connector_streaming#disabled ChimeVoiceConnectorStreaming#disabled}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference <a name="ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.Initializer"></a>

```typescript
import { chimeVoiceConnectorStreaming } from '@cdktf/provider-aws'

new chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.resetConfigurationArn">resetConfigurationArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConfigurationArn` <a name="resetConfigurationArn" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.resetConfigurationArn"></a>

```typescript
public resetConfigurationArn(): void
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.resetDisabled"></a>

```typescript
public resetDisabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.property.configurationArnInput">configurationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.property.configurationArn">configurationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfiguration">ChimeVoiceConnectorStreamingMediaInsightsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `configurationArnInput`<sup>Optional</sup> <a name="configurationArnInput" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.property.configurationArnInput"></a>

```typescript
public readonly configurationArnInput: string;
```

- *Type:* string

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `configurationArn`<sup>Required</sup> <a name="configurationArn" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.property.configurationArn"></a>

```typescript
public readonly configurationArn: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ChimeVoiceConnectorStreamingMediaInsightsConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfiguration">ChimeVoiceConnectorStreamingMediaInsightsConfiguration</a>

---



