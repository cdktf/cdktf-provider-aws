# `chimeVoiceConnectorOrigination` Submodule <a name="`chimeVoiceConnectorOrigination` Submodule" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChimeVoiceConnectorOrigination <a name="ChimeVoiceConnectorOrigination" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_origination aws_chime_voice_connector_origination}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.Initializer"></a>

```typescript
import { chimeVoiceConnectorOrigination } from '@cdktf/provider-aws'

new chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination(scope: Construct, id: string, config: ChimeVoiceConnectorOriginationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationConfig">ChimeVoiceConnectorOriginationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationConfig">ChimeVoiceConnectorOriginationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.putRoute">putRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putRoute` <a name="putRoute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.putRoute"></a>

```typescript
public putRoute(value: IResolvable | ChimeVoiceConnectorOriginationRoute[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.putRoute.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRoute">ChimeVoiceConnectorOriginationRoute</a>[]

---

##### `resetDisabled` <a name="resetDisabled" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.resetDisabled"></a>

```typescript
public resetDisabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.isConstruct"></a>

```typescript
import { chimeVoiceConnectorOrigination } from '@cdktf/provider-aws'

chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.isTerraformElement"></a>

```typescript
import { chimeVoiceConnectorOrigination } from '@cdktf/provider-aws'

chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.isTerraformResource"></a>

```typescript
import { chimeVoiceConnectorOrigination } from '@cdktf/provider-aws'

chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.route">route</a></code> | <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteList">ChimeVoiceConnectorOriginationRouteList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.routeInput">routeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRoute">ChimeVoiceConnectorOriginationRoute</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.voiceConnectorIdInput">voiceConnectorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.voiceConnectorId">voiceConnectorId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `route`<sup>Required</sup> <a name="route" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.route"></a>

```typescript
public readonly route: ChimeVoiceConnectorOriginationRouteList;
```

- *Type:* <a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteList">ChimeVoiceConnectorOriginationRouteList</a>

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `routeInput`<sup>Optional</sup> <a name="routeInput" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.routeInput"></a>

```typescript
public readonly routeInput: IResolvable | ChimeVoiceConnectorOriginationRoute[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRoute">ChimeVoiceConnectorOriginationRoute</a>[]

---

##### `voiceConnectorIdInput`<sup>Optional</sup> <a name="voiceConnectorIdInput" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.voiceConnectorIdInput"></a>

```typescript
public readonly voiceConnectorIdInput: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `voiceConnectorId`<sup>Required</sup> <a name="voiceConnectorId" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.voiceConnectorId"></a>

```typescript
public readonly voiceConnectorId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ChimeVoiceConnectorOriginationConfig <a name="ChimeVoiceConnectorOriginationConfig" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationConfig.Initializer"></a>

```typescript
import { chimeVoiceConnectorOrigination } from '@cdktf/provider-aws'

const chimeVoiceConnectorOriginationConfig: chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationConfig.property.route">route</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRoute">ChimeVoiceConnectorOriginationRoute</a>[]</code> | route block. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationConfig.property.voiceConnectorId">voiceConnectorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_origination#voice_connector_id ChimeVoiceConnectorOrigination#voice_connector_id}. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationConfig.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_origination#disabled ChimeVoiceConnectorOrigination#disabled}. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_origination#id ChimeVoiceConnectorOrigination#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `route`<sup>Required</sup> <a name="route" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationConfig.property.route"></a>

```typescript
public readonly route: IResolvable | ChimeVoiceConnectorOriginationRoute[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRoute">ChimeVoiceConnectorOriginationRoute</a>[]

route block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_origination#route ChimeVoiceConnectorOrigination#route}

---

##### `voiceConnectorId`<sup>Required</sup> <a name="voiceConnectorId" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationConfig.property.voiceConnectorId"></a>

```typescript
public readonly voiceConnectorId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_origination#voice_connector_id ChimeVoiceConnectorOrigination#voice_connector_id}.

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationConfig.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_origination#disabled ChimeVoiceConnectorOrigination#disabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_origination#id ChimeVoiceConnectorOrigination#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ChimeVoiceConnectorOriginationRoute <a name="ChimeVoiceConnectorOriginationRoute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRoute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRoute.Initializer"></a>

```typescript
import { chimeVoiceConnectorOrigination } from '@cdktf/provider-aws'

const chimeVoiceConnectorOriginationRoute: chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRoute = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRoute.property.host">host</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_origination#host ChimeVoiceConnectorOrigination#host}. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRoute.property.priority">priority</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_origination#priority ChimeVoiceConnectorOrigination#priority}. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRoute.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_origination#protocol ChimeVoiceConnectorOrigination#protocol}. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRoute.property.weight">weight</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_origination#weight ChimeVoiceConnectorOrigination#weight}. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRoute.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_origination#port ChimeVoiceConnectorOrigination#port}. |

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRoute.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_origination#host ChimeVoiceConnectorOrigination#host}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRoute.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_origination#priority ChimeVoiceConnectorOrigination#priority}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRoute.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_origination#protocol ChimeVoiceConnectorOrigination#protocol}.

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRoute.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_origination#weight ChimeVoiceConnectorOrigination#weight}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRoute.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_origination#port ChimeVoiceConnectorOrigination#port}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChimeVoiceConnectorOriginationRouteList <a name="ChimeVoiceConnectorOriginationRouteList" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteList.Initializer"></a>

```typescript
import { chimeVoiceConnectorOrigination } from '@cdktf/provider-aws'

new chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteList.get"></a>

```typescript
public get(index: number): ChimeVoiceConnectorOriginationRouteOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRoute">ChimeVoiceConnectorOriginationRoute</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChimeVoiceConnectorOriginationRoute[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRoute">ChimeVoiceConnectorOriginationRoute</a>[]

---


### ChimeVoiceConnectorOriginationRouteOutputReference <a name="ChimeVoiceConnectorOriginationRouteOutputReference" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.Initializer"></a>

```typescript
import { chimeVoiceConnectorOrigination } from '@cdktf/provider-aws'

new chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.resetPort">resetPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPort` <a name="resetPort" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.property.weightInput">weightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRoute">ChimeVoiceConnectorOriginationRoute</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.property.weightInput"></a>

```typescript
public readonly weightInput: number;
```

- *Type:* number

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ChimeVoiceConnectorOriginationRoute | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRoute">ChimeVoiceConnectorOriginationRoute</a> | cdktf.IResolvable

---



