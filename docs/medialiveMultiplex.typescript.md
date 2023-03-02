# `medialiveMultiplex` Submodule <a name="`medialiveMultiplex` Submodule" id="@cdktf/provider-aws.medialiveMultiplex"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MedialiveMultiplex <a name="MedialiveMultiplex" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex aws_medialive_multiplex}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.Initializer"></a>

```typescript
import { medialiveMultiplex } from '@cdktf/provider-aws'

new medialiveMultiplex.MedialiveMultiplex(scope: Construct, id: string, config: MedialiveMultiplexConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexConfig">MedialiveMultiplexConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexConfig">MedialiveMultiplexConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.putMultiplexSettings">putMultiplexSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.resetMultiplexSettings">resetMultiplexSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.resetStartMultiplex">resetStartMultiplex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putMultiplexSettings` <a name="putMultiplexSettings" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.putMultiplexSettings"></a>

```typescript
public putMultiplexSettings(value: MedialiveMultiplexMultiplexSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.putMultiplexSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettings">MedialiveMultiplexMultiplexSettings</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.putTimeouts"></a>

```typescript
public putTimeouts(value: MedialiveMultiplexTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeouts">MedialiveMultiplexTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMultiplexSettings` <a name="resetMultiplexSettings" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.resetMultiplexSettings"></a>

```typescript
public resetMultiplexSettings(): void
```

##### `resetStartMultiplex` <a name="resetStartMultiplex" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.resetStartMultiplex"></a>

```typescript
public resetStartMultiplex(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.isConstruct"></a>

```typescript
import { medialiveMultiplex } from '@cdktf/provider-aws'

medialiveMultiplex.MedialiveMultiplex.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.isTerraformElement"></a>

```typescript
import { medialiveMultiplex } from '@cdktf/provider-aws'

medialiveMultiplex.MedialiveMultiplex.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.isTerraformResource"></a>

```typescript
import { medialiveMultiplex } from '@cdktf/provider-aws'

medialiveMultiplex.MedialiveMultiplex.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.multiplexSettings">multiplexSettings</a></code> | <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference">MedialiveMultiplexMultiplexSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference">MedialiveMultiplexTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.availabilityZonesInput">availabilityZonesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.multiplexSettingsInput">multiplexSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettings">MedialiveMultiplexMultiplexSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.startMultiplexInput">startMultiplexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeouts">MedialiveMultiplexTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.startMultiplex">startMultiplex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `multiplexSettings`<sup>Required</sup> <a name="multiplexSettings" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.multiplexSettings"></a>

```typescript
public readonly multiplexSettings: MedialiveMultiplexMultiplexSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference">MedialiveMultiplexMultiplexSettingsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.timeouts"></a>

```typescript
public readonly timeouts: MedialiveMultiplexTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference">MedialiveMultiplexTimeoutsOutputReference</a>

---

##### `availabilityZonesInput`<sup>Optional</sup> <a name="availabilityZonesInput" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.availabilityZonesInput"></a>

```typescript
public readonly availabilityZonesInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `multiplexSettingsInput`<sup>Optional</sup> <a name="multiplexSettingsInput" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.multiplexSettingsInput"></a>

```typescript
public readonly multiplexSettingsInput: MedialiveMultiplexMultiplexSettings;
```

- *Type:* <a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettings">MedialiveMultiplexMultiplexSettings</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `startMultiplexInput`<sup>Optional</sup> <a name="startMultiplexInput" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.startMultiplexInput"></a>

```typescript
public readonly startMultiplexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: MedialiveMultiplexTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeouts">MedialiveMultiplexTimeouts</a> | cdktf.IResolvable

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `startMultiplex`<sup>Required</sup> <a name="startMultiplex" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.startMultiplex"></a>

```typescript
public readonly startMultiplex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplex.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MedialiveMultiplexConfig <a name="MedialiveMultiplexConfig" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexConfig.Initializer"></a>

```typescript
import { medialiveMultiplex } from '@cdktf/provider-aws'

const medialiveMultiplexConfig: medialiveMultiplex.MedialiveMultiplexConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexConfig.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex#availability_zones MedialiveMultiplex#availability_zones}. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex#name MedialiveMultiplex#name}. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex#id MedialiveMultiplex#id}. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexConfig.property.multiplexSettings">multiplexSettings</a></code> | <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettings">MedialiveMultiplexMultiplexSettings</a></code> | multiplex_settings block. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexConfig.property.startMultiplex">startMultiplex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex#start_multiplex MedialiveMultiplex#start_multiplex}. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex#tags MedialiveMultiplex#tags}. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex#tags_all MedialiveMultiplex#tags_all}. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeouts">MedialiveMultiplexTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexConfig.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex#availability_zones MedialiveMultiplex#availability_zones}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex#name MedialiveMultiplex#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex#id MedialiveMultiplex#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `multiplexSettings`<sup>Optional</sup> <a name="multiplexSettings" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexConfig.property.multiplexSettings"></a>

```typescript
public readonly multiplexSettings: MedialiveMultiplexMultiplexSettings;
```

- *Type:* <a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettings">MedialiveMultiplexMultiplexSettings</a>

multiplex_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex#multiplex_settings MedialiveMultiplex#multiplex_settings}

---

##### `startMultiplex`<sup>Optional</sup> <a name="startMultiplex" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexConfig.property.startMultiplex"></a>

```typescript
public readonly startMultiplex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex#start_multiplex MedialiveMultiplex#start_multiplex}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex#tags MedialiveMultiplex#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex#tags_all MedialiveMultiplex#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MedialiveMultiplexTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeouts">MedialiveMultiplexTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex#timeouts MedialiveMultiplex#timeouts}

---

### MedialiveMultiplexMultiplexSettings <a name="MedialiveMultiplexMultiplexSettings" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettings.Initializer"></a>

```typescript
import { medialiveMultiplex } from '@cdktf/provider-aws'

const medialiveMultiplexMultiplexSettings: medialiveMultiplex.MedialiveMultiplexMultiplexSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettings.property.transportStreamBitrate">transportStreamBitrate</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex#transport_stream_bitrate MedialiveMultiplex#transport_stream_bitrate}. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettings.property.transportStreamId">transportStreamId</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex#transport_stream_id MedialiveMultiplex#transport_stream_id}. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettings.property.maximumVideoBufferDelayMilliseconds">maximumVideoBufferDelayMilliseconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex#maximum_video_buffer_delay_milliseconds MedialiveMultiplex#maximum_video_buffer_delay_milliseconds}. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettings.property.transportStreamReservedBitrate">transportStreamReservedBitrate</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex#transport_stream_reserved_bitrate MedialiveMultiplex#transport_stream_reserved_bitrate}. |

---

##### `transportStreamBitrate`<sup>Required</sup> <a name="transportStreamBitrate" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettings.property.transportStreamBitrate"></a>

```typescript
public readonly transportStreamBitrate: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex#transport_stream_bitrate MedialiveMultiplex#transport_stream_bitrate}.

---

##### `transportStreamId`<sup>Required</sup> <a name="transportStreamId" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettings.property.transportStreamId"></a>

```typescript
public readonly transportStreamId: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex#transport_stream_id MedialiveMultiplex#transport_stream_id}.

---

##### `maximumVideoBufferDelayMilliseconds`<sup>Optional</sup> <a name="maximumVideoBufferDelayMilliseconds" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettings.property.maximumVideoBufferDelayMilliseconds"></a>

```typescript
public readonly maximumVideoBufferDelayMilliseconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex#maximum_video_buffer_delay_milliseconds MedialiveMultiplex#maximum_video_buffer_delay_milliseconds}.

---

##### `transportStreamReservedBitrate`<sup>Optional</sup> <a name="transportStreamReservedBitrate" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettings.property.transportStreamReservedBitrate"></a>

```typescript
public readonly transportStreamReservedBitrate: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex#transport_stream_reserved_bitrate MedialiveMultiplex#transport_stream_reserved_bitrate}.

---

### MedialiveMultiplexTimeouts <a name="MedialiveMultiplexTimeouts" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeouts.Initializer"></a>

```typescript
import { medialiveMultiplex } from '@cdktf/provider-aws'

const medialiveMultiplexTimeouts: medialiveMultiplex.MedialiveMultiplexTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex#create MedialiveMultiplex#create}. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex#delete MedialiveMultiplex#delete}. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex#update MedialiveMultiplex#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex#create MedialiveMultiplex#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex#delete MedialiveMultiplex#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex#update MedialiveMultiplex#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MedialiveMultiplexMultiplexSettingsOutputReference <a name="MedialiveMultiplexMultiplexSettingsOutputReference" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.Initializer"></a>

```typescript
import { medialiveMultiplex } from '@cdktf/provider-aws'

new medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.resetMaximumVideoBufferDelayMilliseconds">resetMaximumVideoBufferDelayMilliseconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.resetTransportStreamReservedBitrate">resetTransportStreamReservedBitrate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaximumVideoBufferDelayMilliseconds` <a name="resetMaximumVideoBufferDelayMilliseconds" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.resetMaximumVideoBufferDelayMilliseconds"></a>

```typescript
public resetMaximumVideoBufferDelayMilliseconds(): void
```

##### `resetTransportStreamReservedBitrate` <a name="resetTransportStreamReservedBitrate" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.resetTransportStreamReservedBitrate"></a>

```typescript
public resetTransportStreamReservedBitrate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.maximumVideoBufferDelayMillisecondsInput">maximumVideoBufferDelayMillisecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.transportStreamBitrateInput">transportStreamBitrateInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.transportStreamIdInput">transportStreamIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.transportStreamReservedBitrateInput">transportStreamReservedBitrateInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.maximumVideoBufferDelayMilliseconds">maximumVideoBufferDelayMilliseconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.transportStreamBitrate">transportStreamBitrate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.transportStreamId">transportStreamId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.transportStreamReservedBitrate">transportStreamReservedBitrate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettings">MedialiveMultiplexMultiplexSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maximumVideoBufferDelayMillisecondsInput`<sup>Optional</sup> <a name="maximumVideoBufferDelayMillisecondsInput" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.maximumVideoBufferDelayMillisecondsInput"></a>

```typescript
public readonly maximumVideoBufferDelayMillisecondsInput: number;
```

- *Type:* number

---

##### `transportStreamBitrateInput`<sup>Optional</sup> <a name="transportStreamBitrateInput" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.transportStreamBitrateInput"></a>

```typescript
public readonly transportStreamBitrateInput: number;
```

- *Type:* number

---

##### `transportStreamIdInput`<sup>Optional</sup> <a name="transportStreamIdInput" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.transportStreamIdInput"></a>

```typescript
public readonly transportStreamIdInput: number;
```

- *Type:* number

---

##### `transportStreamReservedBitrateInput`<sup>Optional</sup> <a name="transportStreamReservedBitrateInput" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.transportStreamReservedBitrateInput"></a>

```typescript
public readonly transportStreamReservedBitrateInput: number;
```

- *Type:* number

---

##### `maximumVideoBufferDelayMilliseconds`<sup>Required</sup> <a name="maximumVideoBufferDelayMilliseconds" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.maximumVideoBufferDelayMilliseconds"></a>

```typescript
public readonly maximumVideoBufferDelayMilliseconds: number;
```

- *Type:* number

---

##### `transportStreamBitrate`<sup>Required</sup> <a name="transportStreamBitrate" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.transportStreamBitrate"></a>

```typescript
public readonly transportStreamBitrate: number;
```

- *Type:* number

---

##### `transportStreamId`<sup>Required</sup> <a name="transportStreamId" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.transportStreamId"></a>

```typescript
public readonly transportStreamId: number;
```

- *Type:* number

---

##### `transportStreamReservedBitrate`<sup>Required</sup> <a name="transportStreamReservedBitrate" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.transportStreamReservedBitrate"></a>

```typescript
public readonly transportStreamReservedBitrate: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MedialiveMultiplexMultiplexSettings;
```

- *Type:* <a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexMultiplexSettings">MedialiveMultiplexMultiplexSettings</a>

---


### MedialiveMultiplexTimeoutsOutputReference <a name="MedialiveMultiplexTimeoutsOutputReference" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.Initializer"></a>

```typescript
import { medialiveMultiplex } from '@cdktf/provider-aws'

new medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeouts">MedialiveMultiplexTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MedialiveMultiplexTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.medialiveMultiplex.MedialiveMultiplexTimeouts">MedialiveMultiplexTimeouts</a> | cdktf.IResolvable

---



