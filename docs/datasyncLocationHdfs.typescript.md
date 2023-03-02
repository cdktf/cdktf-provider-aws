# `datasyncLocationHdfs` Submodule <a name="`datasyncLocationHdfs` Submodule" id="@cdktf/provider-aws.datasyncLocationHdfs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatasyncLocationHdfs <a name="DatasyncLocationHdfs" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs aws_datasync_location_hdfs}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer"></a>

```typescript
import { datasyncLocationHdfs } from '@cdktf/provider-aws'

new datasyncLocationHdfs.DatasyncLocationHdfs(scope: Construct, id: string, config: DatasyncLocationHdfsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig">DatasyncLocationHdfsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig">DatasyncLocationHdfsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.putNameNode">putNameNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.putQopConfiguration">putQopConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetAuthenticationType">resetAuthenticationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetBlockSize">resetBlockSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetKerberosKeytab">resetKerberosKeytab</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetKerberosKrb5Conf">resetKerberosKrb5Conf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetKerberosPrincipal">resetKerberosPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetKmsKeyProviderUri">resetKmsKeyProviderUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetQopConfiguration">resetQopConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetReplicationFactor">resetReplicationFactor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetSimpleUser">resetSimpleUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetSubdirectory">resetSubdirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putNameNode` <a name="putNameNode" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.putNameNode"></a>

```typescript
public putNameNode(value: IResolvable | DatasyncLocationHdfsNameNode[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.putNameNode.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNode">DatasyncLocationHdfsNameNode</a>[]

---

##### `putQopConfiguration` <a name="putQopConfiguration" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.putQopConfiguration"></a>

```typescript
public putQopConfiguration(value: DatasyncLocationHdfsQopConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.putQopConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfiguration">DatasyncLocationHdfsQopConfiguration</a>

---

##### `resetAuthenticationType` <a name="resetAuthenticationType" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetAuthenticationType"></a>

```typescript
public resetAuthenticationType(): void
```

##### `resetBlockSize` <a name="resetBlockSize" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetBlockSize"></a>

```typescript
public resetBlockSize(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKerberosKeytab` <a name="resetKerberosKeytab" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetKerberosKeytab"></a>

```typescript
public resetKerberosKeytab(): void
```

##### `resetKerberosKrb5Conf` <a name="resetKerberosKrb5Conf" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetKerberosKrb5Conf"></a>

```typescript
public resetKerberosKrb5Conf(): void
```

##### `resetKerberosPrincipal` <a name="resetKerberosPrincipal" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetKerberosPrincipal"></a>

```typescript
public resetKerberosPrincipal(): void
```

##### `resetKmsKeyProviderUri` <a name="resetKmsKeyProviderUri" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetKmsKeyProviderUri"></a>

```typescript
public resetKmsKeyProviderUri(): void
```

##### `resetQopConfiguration` <a name="resetQopConfiguration" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetQopConfiguration"></a>

```typescript
public resetQopConfiguration(): void
```

##### `resetReplicationFactor` <a name="resetReplicationFactor" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetReplicationFactor"></a>

```typescript
public resetReplicationFactor(): void
```

##### `resetSimpleUser` <a name="resetSimpleUser" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetSimpleUser"></a>

```typescript
public resetSimpleUser(): void
```

##### `resetSubdirectory` <a name="resetSubdirectory" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetSubdirectory"></a>

```typescript
public resetSubdirectory(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.isConstruct"></a>

```typescript
import { datasyncLocationHdfs } from '@cdktf/provider-aws'

datasyncLocationHdfs.DatasyncLocationHdfs.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.isTerraformElement"></a>

```typescript
import { datasyncLocationHdfs } from '@cdktf/provider-aws'

datasyncLocationHdfs.DatasyncLocationHdfs.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.isTerraformResource"></a>

```typescript
import { datasyncLocationHdfs } from '@cdktf/provider-aws'

datasyncLocationHdfs.DatasyncLocationHdfs.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.nameNode">nameNode</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeList">DatasyncLocationHdfsNameNodeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.qopConfiguration">qopConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference">DatasyncLocationHdfsQopConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.agentArnsInput">agentArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.authenticationTypeInput">authenticationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.blockSizeInput">blockSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.kerberosKeytabInput">kerberosKeytabInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.kerberosKrb5ConfInput">kerberosKrb5ConfInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.kerberosPrincipalInput">kerberosPrincipalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.kmsKeyProviderUriInput">kmsKeyProviderUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.nameNodeInput">nameNodeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNode">DatasyncLocationHdfsNameNode</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.qopConfigurationInput">qopConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfiguration">DatasyncLocationHdfsQopConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.replicationFactorInput">replicationFactorInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.simpleUserInput">simpleUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.subdirectoryInput">subdirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.agentArns">agentArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.authenticationType">authenticationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.blockSize">blockSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.kerberosKeytab">kerberosKeytab</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.kerberosKrb5Conf">kerberosKrb5Conf</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.kerberosPrincipal">kerberosPrincipal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.kmsKeyProviderUri">kmsKeyProviderUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.replicationFactor">replicationFactor</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.simpleUser">simpleUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.subdirectory">subdirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `nameNode`<sup>Required</sup> <a name="nameNode" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.nameNode"></a>

```typescript
public readonly nameNode: DatasyncLocationHdfsNameNodeList;
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeList">DatasyncLocationHdfsNameNodeList</a>

---

##### `qopConfiguration`<sup>Required</sup> <a name="qopConfiguration" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.qopConfiguration"></a>

```typescript
public readonly qopConfiguration: DatasyncLocationHdfsQopConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference">DatasyncLocationHdfsQopConfigurationOutputReference</a>

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `agentArnsInput`<sup>Optional</sup> <a name="agentArnsInput" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.agentArnsInput"></a>

```typescript
public readonly agentArnsInput: string[];
```

- *Type:* string[]

---

##### `authenticationTypeInput`<sup>Optional</sup> <a name="authenticationTypeInput" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.authenticationTypeInput"></a>

```typescript
public readonly authenticationTypeInput: string;
```

- *Type:* string

---

##### `blockSizeInput`<sup>Optional</sup> <a name="blockSizeInput" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.blockSizeInput"></a>

```typescript
public readonly blockSizeInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kerberosKeytabInput`<sup>Optional</sup> <a name="kerberosKeytabInput" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.kerberosKeytabInput"></a>

```typescript
public readonly kerberosKeytabInput: string;
```

- *Type:* string

---

##### `kerberosKrb5ConfInput`<sup>Optional</sup> <a name="kerberosKrb5ConfInput" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.kerberosKrb5ConfInput"></a>

```typescript
public readonly kerberosKrb5ConfInput: string;
```

- *Type:* string

---

##### `kerberosPrincipalInput`<sup>Optional</sup> <a name="kerberosPrincipalInput" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.kerberosPrincipalInput"></a>

```typescript
public readonly kerberosPrincipalInput: string;
```

- *Type:* string

---

##### `kmsKeyProviderUriInput`<sup>Optional</sup> <a name="kmsKeyProviderUriInput" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.kmsKeyProviderUriInput"></a>

```typescript
public readonly kmsKeyProviderUriInput: string;
```

- *Type:* string

---

##### `nameNodeInput`<sup>Optional</sup> <a name="nameNodeInput" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.nameNodeInput"></a>

```typescript
public readonly nameNodeInput: IResolvable | DatasyncLocationHdfsNameNode[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNode">DatasyncLocationHdfsNameNode</a>[]

---

##### `qopConfigurationInput`<sup>Optional</sup> <a name="qopConfigurationInput" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.qopConfigurationInput"></a>

```typescript
public readonly qopConfigurationInput: DatasyncLocationHdfsQopConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfiguration">DatasyncLocationHdfsQopConfiguration</a>

---

##### `replicationFactorInput`<sup>Optional</sup> <a name="replicationFactorInput" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.replicationFactorInput"></a>

```typescript
public readonly replicationFactorInput: number;
```

- *Type:* number

---

##### `simpleUserInput`<sup>Optional</sup> <a name="simpleUserInput" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.simpleUserInput"></a>

```typescript
public readonly simpleUserInput: string;
```

- *Type:* string

---

##### `subdirectoryInput`<sup>Optional</sup> <a name="subdirectoryInput" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.subdirectoryInput"></a>

```typescript
public readonly subdirectoryInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `agentArns`<sup>Required</sup> <a name="agentArns" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.agentArns"></a>

```typescript
public readonly agentArns: string[];
```

- *Type:* string[]

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.authenticationType"></a>

```typescript
public readonly authenticationType: string;
```

- *Type:* string

---

##### `blockSize`<sup>Required</sup> <a name="blockSize" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.blockSize"></a>

```typescript
public readonly blockSize: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kerberosKeytab`<sup>Required</sup> <a name="kerberosKeytab" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.kerberosKeytab"></a>

```typescript
public readonly kerberosKeytab: string;
```

- *Type:* string

---

##### `kerberosKrb5Conf`<sup>Required</sup> <a name="kerberosKrb5Conf" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.kerberosKrb5Conf"></a>

```typescript
public readonly kerberosKrb5Conf: string;
```

- *Type:* string

---

##### `kerberosPrincipal`<sup>Required</sup> <a name="kerberosPrincipal" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.kerberosPrincipal"></a>

```typescript
public readonly kerberosPrincipal: string;
```

- *Type:* string

---

##### `kmsKeyProviderUri`<sup>Required</sup> <a name="kmsKeyProviderUri" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.kmsKeyProviderUri"></a>

```typescript
public readonly kmsKeyProviderUri: string;
```

- *Type:* string

---

##### `replicationFactor`<sup>Required</sup> <a name="replicationFactor" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.replicationFactor"></a>

```typescript
public readonly replicationFactor: number;
```

- *Type:* number

---

##### `simpleUser`<sup>Required</sup> <a name="simpleUser" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.simpleUser"></a>

```typescript
public readonly simpleUser: string;
```

- *Type:* string

---

##### `subdirectory`<sup>Required</sup> <a name="subdirectory" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.subdirectory"></a>

```typescript
public readonly subdirectory: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatasyncLocationHdfsConfig <a name="DatasyncLocationHdfsConfig" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.Initializer"></a>

```typescript
import { datasyncLocationHdfs } from '@cdktf/provider-aws'

const datasyncLocationHdfsConfig: datasyncLocationHdfs.DatasyncLocationHdfsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.agentArns">agentArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#agent_arns DatasyncLocationHdfs#agent_arns}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.nameNode">nameNode</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNode">DatasyncLocationHdfsNameNode</a>[]</code> | name_node block. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.authenticationType">authenticationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#authentication_type DatasyncLocationHdfs#authentication_type}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.blockSize">blockSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#block_size DatasyncLocationHdfs#block_size}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#id DatasyncLocationHdfs#id}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.kerberosKeytab">kerberosKeytab</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#kerberos_keytab DatasyncLocationHdfs#kerberos_keytab}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.kerberosKrb5Conf">kerberosKrb5Conf</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#kerberos_krb5_conf DatasyncLocationHdfs#kerberos_krb5_conf}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.kerberosPrincipal">kerberosPrincipal</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#kerberos_principal DatasyncLocationHdfs#kerberos_principal}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.kmsKeyProviderUri">kmsKeyProviderUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#kms_key_provider_uri DatasyncLocationHdfs#kms_key_provider_uri}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.qopConfiguration">qopConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfiguration">DatasyncLocationHdfsQopConfiguration</a></code> | qop_configuration block. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.replicationFactor">replicationFactor</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#replication_factor DatasyncLocationHdfs#replication_factor}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.simpleUser">simpleUser</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#simple_user DatasyncLocationHdfs#simple_user}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.subdirectory">subdirectory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#subdirectory DatasyncLocationHdfs#subdirectory}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#tags DatasyncLocationHdfs#tags}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#tags_all DatasyncLocationHdfs#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `agentArns`<sup>Required</sup> <a name="agentArns" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.agentArns"></a>

```typescript
public readonly agentArns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#agent_arns DatasyncLocationHdfs#agent_arns}.

---

##### `nameNode`<sup>Required</sup> <a name="nameNode" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.nameNode"></a>

```typescript
public readonly nameNode: IResolvable | DatasyncLocationHdfsNameNode[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNode">DatasyncLocationHdfsNameNode</a>[]

name_node block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#name_node DatasyncLocationHdfs#name_node}

---

##### `authenticationType`<sup>Optional</sup> <a name="authenticationType" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.authenticationType"></a>

```typescript
public readonly authenticationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#authentication_type DatasyncLocationHdfs#authentication_type}.

---

##### `blockSize`<sup>Optional</sup> <a name="blockSize" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.blockSize"></a>

```typescript
public readonly blockSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#block_size DatasyncLocationHdfs#block_size}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#id DatasyncLocationHdfs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kerberosKeytab`<sup>Optional</sup> <a name="kerberosKeytab" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.kerberosKeytab"></a>

```typescript
public readonly kerberosKeytab: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#kerberos_keytab DatasyncLocationHdfs#kerberos_keytab}.

---

##### `kerberosKrb5Conf`<sup>Optional</sup> <a name="kerberosKrb5Conf" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.kerberosKrb5Conf"></a>

```typescript
public readonly kerberosKrb5Conf: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#kerberos_krb5_conf DatasyncLocationHdfs#kerberos_krb5_conf}.

---

##### `kerberosPrincipal`<sup>Optional</sup> <a name="kerberosPrincipal" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.kerberosPrincipal"></a>

```typescript
public readonly kerberosPrincipal: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#kerberos_principal DatasyncLocationHdfs#kerberos_principal}.

---

##### `kmsKeyProviderUri`<sup>Optional</sup> <a name="kmsKeyProviderUri" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.kmsKeyProviderUri"></a>

```typescript
public readonly kmsKeyProviderUri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#kms_key_provider_uri DatasyncLocationHdfs#kms_key_provider_uri}.

---

##### `qopConfiguration`<sup>Optional</sup> <a name="qopConfiguration" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.qopConfiguration"></a>

```typescript
public readonly qopConfiguration: DatasyncLocationHdfsQopConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfiguration">DatasyncLocationHdfsQopConfiguration</a>

qop_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#qop_configuration DatasyncLocationHdfs#qop_configuration}

---

##### `replicationFactor`<sup>Optional</sup> <a name="replicationFactor" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.replicationFactor"></a>

```typescript
public readonly replicationFactor: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#replication_factor DatasyncLocationHdfs#replication_factor}.

---

##### `simpleUser`<sup>Optional</sup> <a name="simpleUser" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.simpleUser"></a>

```typescript
public readonly simpleUser: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#simple_user DatasyncLocationHdfs#simple_user}.

---

##### `subdirectory`<sup>Optional</sup> <a name="subdirectory" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.subdirectory"></a>

```typescript
public readonly subdirectory: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#subdirectory DatasyncLocationHdfs#subdirectory}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#tags DatasyncLocationHdfs#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#tags_all DatasyncLocationHdfs#tags_all}.

---

### DatasyncLocationHdfsNameNode <a name="DatasyncLocationHdfsNameNode" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNode.Initializer"></a>

```typescript
import { datasyncLocationHdfs } from '@cdktf/provider-aws'

const datasyncLocationHdfsNameNode: datasyncLocationHdfs.DatasyncLocationHdfsNameNode = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNode.property.hostname">hostname</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#hostname DatasyncLocationHdfs#hostname}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNode.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#port DatasyncLocationHdfs#port}. |

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNode.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#hostname DatasyncLocationHdfs#hostname}.

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNode.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#port DatasyncLocationHdfs#port}.

---

### DatasyncLocationHdfsQopConfiguration <a name="DatasyncLocationHdfsQopConfiguration" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfiguration.Initializer"></a>

```typescript
import { datasyncLocationHdfs } from '@cdktf/provider-aws'

const datasyncLocationHdfsQopConfiguration: datasyncLocationHdfs.DatasyncLocationHdfsQopConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfiguration.property.dataTransferProtection">dataTransferProtection</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#data_transfer_protection DatasyncLocationHdfs#data_transfer_protection}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfiguration.property.rpcProtection">rpcProtection</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#rpc_protection DatasyncLocationHdfs#rpc_protection}. |

---

##### `dataTransferProtection`<sup>Optional</sup> <a name="dataTransferProtection" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfiguration.property.dataTransferProtection"></a>

```typescript
public readonly dataTransferProtection: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#data_transfer_protection DatasyncLocationHdfs#data_transfer_protection}.

---

##### `rpcProtection`<sup>Optional</sup> <a name="rpcProtection" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfiguration.property.rpcProtection"></a>

```typescript
public readonly rpcProtection: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#rpc_protection DatasyncLocationHdfs#rpc_protection}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatasyncLocationHdfsNameNodeList <a name="DatasyncLocationHdfsNameNodeList" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeList.Initializer"></a>

```typescript
import { datasyncLocationHdfs } from '@cdktf/provider-aws'

new datasyncLocationHdfs.DatasyncLocationHdfsNameNodeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeList.get"></a>

```typescript
public get(index: number): DatasyncLocationHdfsNameNodeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNode">DatasyncLocationHdfsNameNode</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatasyncLocationHdfsNameNode[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNode">DatasyncLocationHdfsNameNode</a>[]

---


### DatasyncLocationHdfsNameNodeOutputReference <a name="DatasyncLocationHdfsNameNodeOutputReference" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.Initializer"></a>

```typescript
import { datasyncLocationHdfs } from '@cdktf/provider-aws'

new datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNode">DatasyncLocationHdfsNameNode</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.property.hostnameInput"></a>

```typescript
public readonly hostnameInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatasyncLocationHdfsNameNode | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNode">DatasyncLocationHdfsNameNode</a> | cdktf.IResolvable

---


### DatasyncLocationHdfsQopConfigurationOutputReference <a name="DatasyncLocationHdfsQopConfigurationOutputReference" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.Initializer"></a>

```typescript
import { datasyncLocationHdfs } from '@cdktf/provider-aws'

new datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.resetDataTransferProtection">resetDataTransferProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.resetRpcProtection">resetRpcProtection</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDataTransferProtection` <a name="resetDataTransferProtection" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.resetDataTransferProtection"></a>

```typescript
public resetDataTransferProtection(): void
```

##### `resetRpcProtection` <a name="resetRpcProtection" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.resetRpcProtection"></a>

```typescript
public resetRpcProtection(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.property.dataTransferProtectionInput">dataTransferProtectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.property.rpcProtectionInput">rpcProtectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.property.dataTransferProtection">dataTransferProtection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.property.rpcProtection">rpcProtection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfiguration">DatasyncLocationHdfsQopConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataTransferProtectionInput`<sup>Optional</sup> <a name="dataTransferProtectionInput" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.property.dataTransferProtectionInput"></a>

```typescript
public readonly dataTransferProtectionInput: string;
```

- *Type:* string

---

##### `rpcProtectionInput`<sup>Optional</sup> <a name="rpcProtectionInput" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.property.rpcProtectionInput"></a>

```typescript
public readonly rpcProtectionInput: string;
```

- *Type:* string

---

##### `dataTransferProtection`<sup>Required</sup> <a name="dataTransferProtection" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.property.dataTransferProtection"></a>

```typescript
public readonly dataTransferProtection: string;
```

- *Type:* string

---

##### `rpcProtection`<sup>Required</sup> <a name="rpcProtection" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.property.rpcProtection"></a>

```typescript
public readonly rpcProtection: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatasyncLocationHdfsQopConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfiguration">DatasyncLocationHdfsQopConfiguration</a>

---



