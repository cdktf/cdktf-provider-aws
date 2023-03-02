# `ivsPlaybackKeyPair` Submodule <a name="`ivsPlaybackKeyPair` Submodule" id="@cdktf/provider-aws.ivsPlaybackKeyPair"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IvsPlaybackKeyPair <a name="IvsPlaybackKeyPair" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ivs_playback_key_pair aws_ivs_playback_key_pair}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.Initializer"></a>

```typescript
import { ivsPlaybackKeyPair } from '@cdktf/provider-aws'

new ivsPlaybackKeyPair.IvsPlaybackKeyPair(scope: Construct, id: string, config: IvsPlaybackKeyPairConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig">IvsPlaybackKeyPairConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig">IvsPlaybackKeyPairConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.putTimeouts"></a>

```typescript
public putTimeouts(value: IvsPlaybackKeyPairTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeouts">IvsPlaybackKeyPairTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.resetName"></a>

```typescript
public resetName(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.isConstruct"></a>

```typescript
import { ivsPlaybackKeyPair } from '@cdktf/provider-aws'

ivsPlaybackKeyPair.IvsPlaybackKeyPair.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.isTerraformElement"></a>

```typescript
import { ivsPlaybackKeyPair } from '@cdktf/provider-aws'

ivsPlaybackKeyPair.IvsPlaybackKeyPair.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.isTerraformResource"></a>

```typescript
import { ivsPlaybackKeyPair } from '@cdktf/provider-aws'

ivsPlaybackKeyPair.IvsPlaybackKeyPair.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.fingerprint">fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference">IvsPlaybackKeyPairTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.publicKeyInput">publicKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeouts">IvsPlaybackKeyPairTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.publicKey">publicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.fingerprint"></a>

```typescript
public readonly fingerprint: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.timeouts"></a>

```typescript
public readonly timeouts: IvsPlaybackKeyPairTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference">IvsPlaybackKeyPairTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `publicKeyInput`<sup>Optional</sup> <a name="publicKeyInput" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.publicKeyInput"></a>

```typescript
public readonly publicKeyInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IvsPlaybackKeyPairTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeouts">IvsPlaybackKeyPairTimeouts</a> | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.publicKey"></a>

```typescript
public readonly publicKey: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IvsPlaybackKeyPairConfig <a name="IvsPlaybackKeyPairConfig" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig.Initializer"></a>

```typescript
import { ivsPlaybackKeyPair } from '@cdktf/provider-aws'

const ivsPlaybackKeyPairConfig: ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig.property.publicKey">publicKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_playback_key_pair#public_key IvsPlaybackKeyPair#public_key}. |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_playback_key_pair#id IvsPlaybackKeyPair#id}. |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_playback_key_pair#name IvsPlaybackKeyPair#name}. |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_playback_key_pair#tags IvsPlaybackKeyPair#tags}. |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_playback_key_pair#tags_all IvsPlaybackKeyPair#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeouts">IvsPlaybackKeyPairTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig.property.publicKey"></a>

```typescript
public readonly publicKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_playback_key_pair#public_key IvsPlaybackKeyPair#public_key}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_playback_key_pair#id IvsPlaybackKeyPair#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_playback_key_pair#name IvsPlaybackKeyPair#name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_playback_key_pair#tags IvsPlaybackKeyPair#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_playback_key_pair#tags_all IvsPlaybackKeyPair#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig.property.timeouts"></a>

```typescript
public readonly timeouts: IvsPlaybackKeyPairTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeouts">IvsPlaybackKeyPairTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_playback_key_pair#timeouts IvsPlaybackKeyPair#timeouts}

---

### IvsPlaybackKeyPairTimeouts <a name="IvsPlaybackKeyPairTimeouts" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeouts.Initializer"></a>

```typescript
import { ivsPlaybackKeyPair } from '@cdktf/provider-aws'

const ivsPlaybackKeyPairTimeouts: ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_playback_key_pair#create IvsPlaybackKeyPair#create}. |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_playback_key_pair#delete IvsPlaybackKeyPair#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_playback_key_pair#create IvsPlaybackKeyPair#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_playback_key_pair#delete IvsPlaybackKeyPair#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### IvsPlaybackKeyPairTimeoutsOutputReference <a name="IvsPlaybackKeyPairTimeoutsOutputReference" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.Initializer"></a>

```typescript
import { ivsPlaybackKeyPair } from '@cdktf/provider-aws'

new ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeouts">IvsPlaybackKeyPairTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IvsPlaybackKeyPairTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeouts">IvsPlaybackKeyPairTimeouts</a> | cdktf.IResolvable

---



