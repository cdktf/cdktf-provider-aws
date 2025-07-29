# `chimeVoiceConnectorGroup` Submodule <a name="`chimeVoiceConnectorGroup` Submodule" id="@cdktf/provider-aws.chimeVoiceConnectorGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChimeVoiceConnectorGroup <a name="ChimeVoiceConnectorGroup" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/chime_voice_connector_group aws_chime_voice_connector_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.Initializer"></a>

```typescript
import { chimeVoiceConnectorGroup } from '@cdktf/provider-aws'

new chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup(scope: Construct, id: string, config: ChimeVoiceConnectorGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig">ChimeVoiceConnectorGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig">ChimeVoiceConnectorGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.putConnector">putConnector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.resetConnector">resetConnector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConnector` <a name="putConnector" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.putConnector"></a>

```typescript
public putConnector(value: IResolvable | ChimeVoiceConnectorGroupConnector[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.putConnector.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnector">ChimeVoiceConnectorGroupConnector</a>[]

---

##### `resetConnector` <a name="resetConnector" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.resetConnector"></a>

```typescript
public resetConnector(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ChimeVoiceConnectorGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.isConstruct"></a>

```typescript
import { chimeVoiceConnectorGroup } from '@cdktf/provider-aws'

chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.isTerraformElement"></a>

```typescript
import { chimeVoiceConnectorGroup } from '@cdktf/provider-aws'

chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.isTerraformResource"></a>

```typescript
import { chimeVoiceConnectorGroup } from '@cdktf/provider-aws'

chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.generateConfigForImport"></a>

```typescript
import { chimeVoiceConnectorGroup } from '@cdktf/provider-aws'

chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ChimeVoiceConnectorGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ChimeVoiceConnectorGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ChimeVoiceConnectorGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/chime_voice_connector_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ChimeVoiceConnectorGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.connector">connector</a></code> | <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList">ChimeVoiceConnectorGroupConnectorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.connectorInput">connectorInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnector">ChimeVoiceConnectorGroupConnector</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `connector`<sup>Required</sup> <a name="connector" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.connector"></a>

```typescript
public readonly connector: ChimeVoiceConnectorGroupConnectorList;
```

- *Type:* <a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList">ChimeVoiceConnectorGroupConnectorList</a>

---

##### `connectorInput`<sup>Optional</sup> <a name="connectorInput" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.connectorInput"></a>

```typescript
public readonly connectorInput: IResolvable | ChimeVoiceConnectorGroupConnector[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnector">ChimeVoiceConnectorGroupConnector</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ChimeVoiceConnectorGroupConfig <a name="ChimeVoiceConnectorGroupConfig" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.Initializer"></a>

```typescript
import { chimeVoiceConnectorGroup } from '@cdktf/provider-aws'

const chimeVoiceConnectorGroupConfig: chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/chime_voice_connector_group#name ChimeVoiceConnectorGroup#name}. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.property.connector">connector</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnector">ChimeVoiceConnectorGroupConnector</a>[]</code> | connector block. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/chime_voice_connector_group#id ChimeVoiceConnectorGroup#id}. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/chime_voice_connector_group#name ChimeVoiceConnectorGroup#name}.

---

##### `connector`<sup>Optional</sup> <a name="connector" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.property.connector"></a>

```typescript
public readonly connector: IResolvable | ChimeVoiceConnectorGroupConnector[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnector">ChimeVoiceConnectorGroupConnector</a>[]

connector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/chime_voice_connector_group#connector ChimeVoiceConnectorGroup#connector}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/chime_voice_connector_group#id ChimeVoiceConnectorGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/chime_voice_connector_group#region ChimeVoiceConnectorGroup#region}

---

### ChimeVoiceConnectorGroupConnector <a name="ChimeVoiceConnectorGroupConnector" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnector.Initializer"></a>

```typescript
import { chimeVoiceConnectorGroup } from '@cdktf/provider-aws'

const chimeVoiceConnectorGroupConnector: chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnector = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnector.property.priority">priority</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/chime_voice_connector_group#priority ChimeVoiceConnectorGroup#priority}. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnector.property.voiceConnectorId">voiceConnectorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/chime_voice_connector_group#voice_connector_id ChimeVoiceConnectorGroup#voice_connector_id}. |

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnector.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/chime_voice_connector_group#priority ChimeVoiceConnectorGroup#priority}.

---

##### `voiceConnectorId`<sup>Required</sup> <a name="voiceConnectorId" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnector.property.voiceConnectorId"></a>

```typescript
public readonly voiceConnectorId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/chime_voice_connector_group#voice_connector_id ChimeVoiceConnectorGroup#voice_connector_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChimeVoiceConnectorGroupConnectorList <a name="ChimeVoiceConnectorGroupConnectorList" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.Initializer"></a>

```typescript
import { chimeVoiceConnectorGroup } from '@cdktf/provider-aws'

new chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.get"></a>

```typescript
public get(index: number): ChimeVoiceConnectorGroupConnectorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnector">ChimeVoiceConnectorGroupConnector</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChimeVoiceConnectorGroupConnector[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnector">ChimeVoiceConnectorGroupConnector</a>[]

---


### ChimeVoiceConnectorGroupConnectorOutputReference <a name="ChimeVoiceConnectorGroupConnectorOutputReference" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.Initializer"></a>

```typescript
import { chimeVoiceConnectorGroup } from '@cdktf/provider-aws'

new chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.property.voiceConnectorIdInput">voiceConnectorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.property.voiceConnectorId">voiceConnectorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnector">ChimeVoiceConnectorGroupConnector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `voiceConnectorIdInput`<sup>Optional</sup> <a name="voiceConnectorIdInput" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.property.voiceConnectorIdInput"></a>

```typescript
public readonly voiceConnectorIdInput: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `voiceConnectorId`<sup>Required</sup> <a name="voiceConnectorId" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.property.voiceConnectorId"></a>

```typescript
public readonly voiceConnectorId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChimeVoiceConnectorGroupConnector;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnector">ChimeVoiceConnectorGroupConnector</a>

---



