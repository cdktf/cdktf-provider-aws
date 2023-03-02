# `kmsCustomKeyStore` Submodule <a name="`kmsCustomKeyStore` Submodule" id="@cdktf/provider-aws.kmsCustomKeyStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KmsCustomKeyStore <a name="KmsCustomKeyStore" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/kms_custom_key_store aws_kms_custom_key_store}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer"></a>

```typescript
import { kmsCustomKeyStore } from '@cdktf/provider-aws'

new kmsCustomKeyStore.KmsCustomKeyStore(scope: Construct, id: string, config: KmsCustomKeyStoreConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig">KmsCustomKeyStoreConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig">KmsCustomKeyStoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.putTimeouts"></a>

```typescript
public putTimeouts(value: KmsCustomKeyStoreTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeouts">KmsCustomKeyStoreTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.isConstruct"></a>

```typescript
import { kmsCustomKeyStore } from '@cdktf/provider-aws'

kmsCustomKeyStore.KmsCustomKeyStore.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.isTerraformElement"></a>

```typescript
import { kmsCustomKeyStore } from '@cdktf/provider-aws'

kmsCustomKeyStore.KmsCustomKeyStore.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.isTerraformResource"></a>

```typescript
import { kmsCustomKeyStore } from '@cdktf/provider-aws'

kmsCustomKeyStore.KmsCustomKeyStore.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference">KmsCustomKeyStoreTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.cloudHsmClusterIdInput">cloudHsmClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.customKeyStoreNameInput">customKeyStoreNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.keyStorePasswordInput">keyStorePasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeouts">KmsCustomKeyStoreTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.trustAnchorCertificateInput">trustAnchorCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.cloudHsmClusterId">cloudHsmClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.customKeyStoreName">customKeyStoreName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.keyStorePassword">keyStorePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.trustAnchorCertificate">trustAnchorCertificate</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.timeouts"></a>

```typescript
public readonly timeouts: KmsCustomKeyStoreTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference">KmsCustomKeyStoreTimeoutsOutputReference</a>

---

##### `cloudHsmClusterIdInput`<sup>Optional</sup> <a name="cloudHsmClusterIdInput" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.cloudHsmClusterIdInput"></a>

```typescript
public readonly cloudHsmClusterIdInput: string;
```

- *Type:* string

---

##### `customKeyStoreNameInput`<sup>Optional</sup> <a name="customKeyStoreNameInput" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.customKeyStoreNameInput"></a>

```typescript
public readonly customKeyStoreNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keyStorePasswordInput`<sup>Optional</sup> <a name="keyStorePasswordInput" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.keyStorePasswordInput"></a>

```typescript
public readonly keyStorePasswordInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: KmsCustomKeyStoreTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeouts">KmsCustomKeyStoreTimeouts</a> | cdktf.IResolvable

---

##### `trustAnchorCertificateInput`<sup>Optional</sup> <a name="trustAnchorCertificateInput" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.trustAnchorCertificateInput"></a>

```typescript
public readonly trustAnchorCertificateInput: string;
```

- *Type:* string

---

##### `cloudHsmClusterId`<sup>Required</sup> <a name="cloudHsmClusterId" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.cloudHsmClusterId"></a>

```typescript
public readonly cloudHsmClusterId: string;
```

- *Type:* string

---

##### `customKeyStoreName`<sup>Required</sup> <a name="customKeyStoreName" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.customKeyStoreName"></a>

```typescript
public readonly customKeyStoreName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `keyStorePassword`<sup>Required</sup> <a name="keyStorePassword" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.keyStorePassword"></a>

```typescript
public readonly keyStorePassword: string;
```

- *Type:* string

---

##### `trustAnchorCertificate`<sup>Required</sup> <a name="trustAnchorCertificate" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.trustAnchorCertificate"></a>

```typescript
public readonly trustAnchorCertificate: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KmsCustomKeyStoreConfig <a name="KmsCustomKeyStoreConfig" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.Initializer"></a>

```typescript
import { kmsCustomKeyStore } from '@cdktf/provider-aws'

const kmsCustomKeyStoreConfig: kmsCustomKeyStore.KmsCustomKeyStoreConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.cloudHsmClusterId">cloudHsmClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_custom_key_store#cloud_hsm_cluster_id KmsCustomKeyStore#cloud_hsm_cluster_id}. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.customKeyStoreName">customKeyStoreName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_custom_key_store#custom_key_store_name KmsCustomKeyStore#custom_key_store_name}. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.keyStorePassword">keyStorePassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_custom_key_store#key_store_password KmsCustomKeyStore#key_store_password}. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.trustAnchorCertificate">trustAnchorCertificate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_custom_key_store#trust_anchor_certificate KmsCustomKeyStore#trust_anchor_certificate}. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_custom_key_store#id KmsCustomKeyStore#id}. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeouts">KmsCustomKeyStoreTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cloudHsmClusterId`<sup>Required</sup> <a name="cloudHsmClusterId" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.cloudHsmClusterId"></a>

```typescript
public readonly cloudHsmClusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_custom_key_store#cloud_hsm_cluster_id KmsCustomKeyStore#cloud_hsm_cluster_id}.

---

##### `customKeyStoreName`<sup>Required</sup> <a name="customKeyStoreName" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.customKeyStoreName"></a>

```typescript
public readonly customKeyStoreName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_custom_key_store#custom_key_store_name KmsCustomKeyStore#custom_key_store_name}.

---

##### `keyStorePassword`<sup>Required</sup> <a name="keyStorePassword" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.keyStorePassword"></a>

```typescript
public readonly keyStorePassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_custom_key_store#key_store_password KmsCustomKeyStore#key_store_password}.

---

##### `trustAnchorCertificate`<sup>Required</sup> <a name="trustAnchorCertificate" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.trustAnchorCertificate"></a>

```typescript
public readonly trustAnchorCertificate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_custom_key_store#trust_anchor_certificate KmsCustomKeyStore#trust_anchor_certificate}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_custom_key_store#id KmsCustomKeyStore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.timeouts"></a>

```typescript
public readonly timeouts: KmsCustomKeyStoreTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeouts">KmsCustomKeyStoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_custom_key_store#timeouts KmsCustomKeyStore#timeouts}

---

### KmsCustomKeyStoreTimeouts <a name="KmsCustomKeyStoreTimeouts" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeouts.Initializer"></a>

```typescript
import { kmsCustomKeyStore } from '@cdktf/provider-aws'

const kmsCustomKeyStoreTimeouts: kmsCustomKeyStore.KmsCustomKeyStoreTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_custom_key_store#create KmsCustomKeyStore#create}. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_custom_key_store#delete KmsCustomKeyStore#delete}. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_custom_key_store#update KmsCustomKeyStore#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_custom_key_store#create KmsCustomKeyStore#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_custom_key_store#delete KmsCustomKeyStore#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_custom_key_store#update KmsCustomKeyStore#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KmsCustomKeyStoreTimeoutsOutputReference <a name="KmsCustomKeyStoreTimeoutsOutputReference" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.Initializer"></a>

```typescript
import { kmsCustomKeyStore } from '@cdktf/provider-aws'

new kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeouts">KmsCustomKeyStoreTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KmsCustomKeyStoreTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeouts">KmsCustomKeyStoreTimeouts</a> | cdktf.IResolvable

---



