# `datasyncLocationObjectStorage` Submodule <a name="`datasyncLocationObjectStorage` Submodule" id="@cdktf/provider-aws.datasyncLocationObjectStorage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatasyncLocationObjectStorage <a name="DatasyncLocationObjectStorage" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_object_storage aws_datasync_location_object_storage}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer"></a>

```typescript
import { datasyncLocationObjectStorage } from '@cdktf/provider-aws'

new datasyncLocationObjectStorage.DatasyncLocationObjectStorage(scope: Construct, id: string, config: DatasyncLocationObjectStorageConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig">DatasyncLocationObjectStorageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig">DatasyncLocationObjectStorageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetAccessKey">resetAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetSecretKey">resetSecretKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetServerCertificate">resetServerCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetServerPort">resetServerPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetServerProtocol">resetServerProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetSubdirectory">resetSubdirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAccessKey` <a name="resetAccessKey" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetAccessKey"></a>

```typescript
public resetAccessKey(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSecretKey` <a name="resetSecretKey" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetSecretKey"></a>

```typescript
public resetSecretKey(): void
```

##### `resetServerCertificate` <a name="resetServerCertificate" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetServerCertificate"></a>

```typescript
public resetServerCertificate(): void
```

##### `resetServerPort` <a name="resetServerPort" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetServerPort"></a>

```typescript
public resetServerPort(): void
```

##### `resetServerProtocol` <a name="resetServerProtocol" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetServerProtocol"></a>

```typescript
public resetServerProtocol(): void
```

##### `resetSubdirectory` <a name="resetSubdirectory" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetSubdirectory"></a>

```typescript
public resetSubdirectory(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.isConstruct"></a>

```typescript
import { datasyncLocationObjectStorage } from '@cdktf/provider-aws'

datasyncLocationObjectStorage.DatasyncLocationObjectStorage.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.isTerraformElement"></a>

```typescript
import { datasyncLocationObjectStorage } from '@cdktf/provider-aws'

datasyncLocationObjectStorage.DatasyncLocationObjectStorage.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.isTerraformResource"></a>

```typescript
import { datasyncLocationObjectStorage } from '@cdktf/provider-aws'

datasyncLocationObjectStorage.DatasyncLocationObjectStorage.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.accessKeyInput">accessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.agentArnsInput">agentArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.bucketNameInput">bucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.secretKeyInput">secretKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.serverCertificateInput">serverCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.serverHostnameInput">serverHostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.serverPortInput">serverPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.serverProtocolInput">serverProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.subdirectoryInput">subdirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.accessKey">accessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.agentArns">agentArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.secretKey">secretKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.serverCertificate">serverCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.serverHostname">serverHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.serverPort">serverPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.serverProtocol">serverProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.subdirectory">subdirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `accessKeyInput`<sup>Optional</sup> <a name="accessKeyInput" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.accessKeyInput"></a>

```typescript
public readonly accessKeyInput: string;
```

- *Type:* string

---

##### `agentArnsInput`<sup>Optional</sup> <a name="agentArnsInput" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.agentArnsInput"></a>

```typescript
public readonly agentArnsInput: string[];
```

- *Type:* string[]

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.bucketNameInput"></a>

```typescript
public readonly bucketNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `secretKeyInput`<sup>Optional</sup> <a name="secretKeyInput" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.secretKeyInput"></a>

```typescript
public readonly secretKeyInput: string;
```

- *Type:* string

---

##### `serverCertificateInput`<sup>Optional</sup> <a name="serverCertificateInput" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.serverCertificateInput"></a>

```typescript
public readonly serverCertificateInput: string;
```

- *Type:* string

---

##### `serverHostnameInput`<sup>Optional</sup> <a name="serverHostnameInput" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.serverHostnameInput"></a>

```typescript
public readonly serverHostnameInput: string;
```

- *Type:* string

---

##### `serverPortInput`<sup>Optional</sup> <a name="serverPortInput" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.serverPortInput"></a>

```typescript
public readonly serverPortInput: number;
```

- *Type:* number

---

##### `serverProtocolInput`<sup>Optional</sup> <a name="serverProtocolInput" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.serverProtocolInput"></a>

```typescript
public readonly serverProtocolInput: string;
```

- *Type:* string

---

##### `subdirectoryInput`<sup>Optional</sup> <a name="subdirectoryInput" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.subdirectoryInput"></a>

```typescript
public readonly subdirectoryInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `accessKey`<sup>Required</sup> <a name="accessKey" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.accessKey"></a>

```typescript
public readonly accessKey: string;
```

- *Type:* string

---

##### `agentArns`<sup>Required</sup> <a name="agentArns" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.agentArns"></a>

```typescript
public readonly agentArns: string[];
```

- *Type:* string[]

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `secretKey`<sup>Required</sup> <a name="secretKey" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.secretKey"></a>

```typescript
public readonly secretKey: string;
```

- *Type:* string

---

##### `serverCertificate`<sup>Required</sup> <a name="serverCertificate" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.serverCertificate"></a>

```typescript
public readonly serverCertificate: string;
```

- *Type:* string

---

##### `serverHostname`<sup>Required</sup> <a name="serverHostname" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.serverHostname"></a>

```typescript
public readonly serverHostname: string;
```

- *Type:* string

---

##### `serverPort`<sup>Required</sup> <a name="serverPort" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.serverPort"></a>

```typescript
public readonly serverPort: number;
```

- *Type:* number

---

##### `serverProtocol`<sup>Required</sup> <a name="serverProtocol" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.serverProtocol"></a>

```typescript
public readonly serverProtocol: string;
```

- *Type:* string

---

##### `subdirectory`<sup>Required</sup> <a name="subdirectory" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.subdirectory"></a>

```typescript
public readonly subdirectory: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatasyncLocationObjectStorageConfig <a name="DatasyncLocationObjectStorageConfig" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.Initializer"></a>

```typescript
import { datasyncLocationObjectStorage } from '@cdktf/provider-aws'

const datasyncLocationObjectStorageConfig: datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.agentArns">agentArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_object_storage#agent_arns DatasyncLocationObjectStorage#agent_arns}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.bucketName">bucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_object_storage#bucket_name DatasyncLocationObjectStorage#bucket_name}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.serverHostname">serverHostname</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_object_storage#server_hostname DatasyncLocationObjectStorage#server_hostname}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.accessKey">accessKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_object_storage#access_key DatasyncLocationObjectStorage#access_key}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_object_storage#id DatasyncLocationObjectStorage#id}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.secretKey">secretKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_object_storage#secret_key DatasyncLocationObjectStorage#secret_key}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.serverCertificate">serverCertificate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_object_storage#server_certificate DatasyncLocationObjectStorage#server_certificate}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.serverPort">serverPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_object_storage#server_port DatasyncLocationObjectStorage#server_port}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.serverProtocol">serverProtocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_object_storage#server_protocol DatasyncLocationObjectStorage#server_protocol}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.subdirectory">subdirectory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_object_storage#subdirectory DatasyncLocationObjectStorage#subdirectory}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_object_storage#tags DatasyncLocationObjectStorage#tags}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_object_storage#tags_all DatasyncLocationObjectStorage#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `agentArns`<sup>Required</sup> <a name="agentArns" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.agentArns"></a>

```typescript
public readonly agentArns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_object_storage#agent_arns DatasyncLocationObjectStorage#agent_arns}.

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_object_storage#bucket_name DatasyncLocationObjectStorage#bucket_name}.

---

##### `serverHostname`<sup>Required</sup> <a name="serverHostname" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.serverHostname"></a>

```typescript
public readonly serverHostname: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_object_storage#server_hostname DatasyncLocationObjectStorage#server_hostname}.

---

##### `accessKey`<sup>Optional</sup> <a name="accessKey" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.accessKey"></a>

```typescript
public readonly accessKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_object_storage#access_key DatasyncLocationObjectStorage#access_key}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_object_storage#id DatasyncLocationObjectStorage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `secretKey`<sup>Optional</sup> <a name="secretKey" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.secretKey"></a>

```typescript
public readonly secretKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_object_storage#secret_key DatasyncLocationObjectStorage#secret_key}.

---

##### `serverCertificate`<sup>Optional</sup> <a name="serverCertificate" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.serverCertificate"></a>

```typescript
public readonly serverCertificate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_object_storage#server_certificate DatasyncLocationObjectStorage#server_certificate}.

---

##### `serverPort`<sup>Optional</sup> <a name="serverPort" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.serverPort"></a>

```typescript
public readonly serverPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_object_storage#server_port DatasyncLocationObjectStorage#server_port}.

---

##### `serverProtocol`<sup>Optional</sup> <a name="serverProtocol" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.serverProtocol"></a>

```typescript
public readonly serverProtocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_object_storage#server_protocol DatasyncLocationObjectStorage#server_protocol}.

---

##### `subdirectory`<sup>Optional</sup> <a name="subdirectory" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.subdirectory"></a>

```typescript
public readonly subdirectory: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_object_storage#subdirectory DatasyncLocationObjectStorage#subdirectory}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_object_storage#tags DatasyncLocationObjectStorage#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_object_storage#tags_all DatasyncLocationObjectStorage#tags_all}.

---



