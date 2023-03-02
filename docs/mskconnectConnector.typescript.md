# `mskconnectConnector` Submodule <a name="`mskconnectConnector` Submodule" id="@cdktf/provider-aws.mskconnectConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MskconnectConnector <a name="MskconnectConnector" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector aws_mskconnect_connector}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.Initializer"></a>

```typescript
import { mskconnectConnector } from '@cdktf/provider-aws'

new mskconnectConnector.MskconnectConnector(scope: Construct, id: string, config: MskconnectConnectorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig">MskconnectConnectorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig">MskconnectConnectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putCapacity">putCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putKafkaCluster">putKafkaCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putKafkaClusterClientAuthentication">putKafkaClusterClientAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putKafkaClusterEncryptionInTransit">putKafkaClusterEncryptionInTransit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putLogDelivery">putLogDelivery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putPlugin">putPlugin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putWorkerConfiguration">putWorkerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.resetLogDelivery">resetLogDelivery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.resetWorkerConfiguration">resetWorkerConfiguration</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putCapacity` <a name="putCapacity" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putCapacity"></a>

```typescript
public putCapacity(value: MskconnectConnectorCapacity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putCapacity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacity">MskconnectConnectorCapacity</a>

---

##### `putKafkaCluster` <a name="putKafkaCluster" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putKafkaCluster"></a>

```typescript
public putKafkaCluster(value: MskconnectConnectorKafkaCluster): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putKafkaCluster.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaCluster">MskconnectConnectorKafkaCluster</a>

---

##### `putKafkaClusterClientAuthentication` <a name="putKafkaClusterClientAuthentication" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putKafkaClusterClientAuthentication"></a>

```typescript
public putKafkaClusterClientAuthentication(value: MskconnectConnectorKafkaClusterClientAuthentication): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putKafkaClusterClientAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthentication">MskconnectConnectorKafkaClusterClientAuthentication</a>

---

##### `putKafkaClusterEncryptionInTransit` <a name="putKafkaClusterEncryptionInTransit" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putKafkaClusterEncryptionInTransit"></a>

```typescript
public putKafkaClusterEncryptionInTransit(value: MskconnectConnectorKafkaClusterEncryptionInTransit): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putKafkaClusterEncryptionInTransit.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransit">MskconnectConnectorKafkaClusterEncryptionInTransit</a>

---

##### `putLogDelivery` <a name="putLogDelivery" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putLogDelivery"></a>

```typescript
public putLogDelivery(value: MskconnectConnectorLogDelivery): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putLogDelivery.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDelivery">MskconnectConnectorLogDelivery</a>

---

##### `putPlugin` <a name="putPlugin" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putPlugin"></a>

```typescript
public putPlugin(value: IResolvable | MskconnectConnectorPlugin[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putPlugin.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPlugin">MskconnectConnectorPlugin</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putTimeouts"></a>

```typescript
public putTimeouts(value: MskconnectConnectorTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeouts">MskconnectConnectorTimeouts</a>

---

##### `putWorkerConfiguration` <a name="putWorkerConfiguration" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putWorkerConfiguration"></a>

```typescript
public putWorkerConfiguration(value: MskconnectConnectorWorkerConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putWorkerConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfiguration">MskconnectConnectorWorkerConfiguration</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLogDelivery` <a name="resetLogDelivery" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.resetLogDelivery"></a>

```typescript
public resetLogDelivery(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetWorkerConfiguration` <a name="resetWorkerConfiguration" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.resetWorkerConfiguration"></a>

```typescript
public resetWorkerConfiguration(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.isConstruct"></a>

```typescript
import { mskconnectConnector } from '@cdktf/provider-aws'

mskconnectConnector.MskconnectConnector.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.isTerraformElement"></a>

```typescript
import { mskconnectConnector } from '@cdktf/provider-aws'

mskconnectConnector.MskconnectConnector.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.isTerraformResource"></a>

```typescript
import { mskconnectConnector } from '@cdktf/provider-aws'

mskconnectConnector.MskconnectConnector.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.capacity">capacity</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference">MskconnectConnectorCapacityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.kafkaCluster">kafkaCluster</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference">MskconnectConnectorKafkaClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.kafkaClusterClientAuthentication">kafkaClusterClientAuthentication</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference">MskconnectConnectorKafkaClusterClientAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.kafkaClusterEncryptionInTransit">kafkaClusterEncryptionInTransit</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference">MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.logDelivery">logDelivery</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference">MskconnectConnectorLogDeliveryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.plugin">plugin</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList">MskconnectConnectorPluginList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference">MskconnectConnectorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.workerConfiguration">workerConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference">MskconnectConnectorWorkerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.capacityInput">capacityInput</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacity">MskconnectConnectorCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.connectorConfigurationInput">connectorConfigurationInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.kafkaClusterClientAuthenticationInput">kafkaClusterClientAuthenticationInput</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthentication">MskconnectConnectorKafkaClusterClientAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.kafkaClusterEncryptionInTransitInput">kafkaClusterEncryptionInTransitInput</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransit">MskconnectConnectorKafkaClusterEncryptionInTransit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.kafkaClusterInput">kafkaClusterInput</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaCluster">MskconnectConnectorKafkaCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.kafkaconnectVersionInput">kafkaconnectVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.logDeliveryInput">logDeliveryInput</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDelivery">MskconnectConnectorLogDelivery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.pluginInput">pluginInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPlugin">MskconnectConnectorPlugin</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.serviceExecutionRoleArnInput">serviceExecutionRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeouts">MskconnectConnectorTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.workerConfigurationInput">workerConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfiguration">MskconnectConnectorWorkerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.connectorConfiguration">connectorConfiguration</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.kafkaconnectVersion">kafkaconnectVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.serviceExecutionRoleArn">serviceExecutionRoleArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.capacity"></a>

```typescript
public readonly capacity: MskconnectConnectorCapacityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference">MskconnectConnectorCapacityOutputReference</a>

---

##### `kafkaCluster`<sup>Required</sup> <a name="kafkaCluster" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.kafkaCluster"></a>

```typescript
public readonly kafkaCluster: MskconnectConnectorKafkaClusterOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference">MskconnectConnectorKafkaClusterOutputReference</a>

---

##### `kafkaClusterClientAuthentication`<sup>Required</sup> <a name="kafkaClusterClientAuthentication" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.kafkaClusterClientAuthentication"></a>

```typescript
public readonly kafkaClusterClientAuthentication: MskconnectConnectorKafkaClusterClientAuthenticationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference">MskconnectConnectorKafkaClusterClientAuthenticationOutputReference</a>

---

##### `kafkaClusterEncryptionInTransit`<sup>Required</sup> <a name="kafkaClusterEncryptionInTransit" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.kafkaClusterEncryptionInTransit"></a>

```typescript
public readonly kafkaClusterEncryptionInTransit: MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference">MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference</a>

---

##### `logDelivery`<sup>Required</sup> <a name="logDelivery" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.logDelivery"></a>

```typescript
public readonly logDelivery: MskconnectConnectorLogDeliveryOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference">MskconnectConnectorLogDeliveryOutputReference</a>

---

##### `plugin`<sup>Required</sup> <a name="plugin" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.plugin"></a>

```typescript
public readonly plugin: MskconnectConnectorPluginList;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList">MskconnectConnectorPluginList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.timeouts"></a>

```typescript
public readonly timeouts: MskconnectConnectorTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference">MskconnectConnectorTimeoutsOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `workerConfiguration`<sup>Required</sup> <a name="workerConfiguration" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.workerConfiguration"></a>

```typescript
public readonly workerConfiguration: MskconnectConnectorWorkerConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference">MskconnectConnectorWorkerConfigurationOutputReference</a>

---

##### `capacityInput`<sup>Optional</sup> <a name="capacityInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.capacityInput"></a>

```typescript
public readonly capacityInput: MskconnectConnectorCapacity;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacity">MskconnectConnectorCapacity</a>

---

##### `connectorConfigurationInput`<sup>Optional</sup> <a name="connectorConfigurationInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.connectorConfigurationInput"></a>

```typescript
public readonly connectorConfigurationInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kafkaClusterClientAuthenticationInput`<sup>Optional</sup> <a name="kafkaClusterClientAuthenticationInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.kafkaClusterClientAuthenticationInput"></a>

```typescript
public readonly kafkaClusterClientAuthenticationInput: MskconnectConnectorKafkaClusterClientAuthentication;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthentication">MskconnectConnectorKafkaClusterClientAuthentication</a>

---

##### `kafkaClusterEncryptionInTransitInput`<sup>Optional</sup> <a name="kafkaClusterEncryptionInTransitInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.kafkaClusterEncryptionInTransitInput"></a>

```typescript
public readonly kafkaClusterEncryptionInTransitInput: MskconnectConnectorKafkaClusterEncryptionInTransit;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransit">MskconnectConnectorKafkaClusterEncryptionInTransit</a>

---

##### `kafkaClusterInput`<sup>Optional</sup> <a name="kafkaClusterInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.kafkaClusterInput"></a>

```typescript
public readonly kafkaClusterInput: MskconnectConnectorKafkaCluster;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaCluster">MskconnectConnectorKafkaCluster</a>

---

##### `kafkaconnectVersionInput`<sup>Optional</sup> <a name="kafkaconnectVersionInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.kafkaconnectVersionInput"></a>

```typescript
public readonly kafkaconnectVersionInput: string;
```

- *Type:* string

---

##### `logDeliveryInput`<sup>Optional</sup> <a name="logDeliveryInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.logDeliveryInput"></a>

```typescript
public readonly logDeliveryInput: MskconnectConnectorLogDelivery;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDelivery">MskconnectConnectorLogDelivery</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `pluginInput`<sup>Optional</sup> <a name="pluginInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.pluginInput"></a>

```typescript
public readonly pluginInput: IResolvable | MskconnectConnectorPlugin[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPlugin">MskconnectConnectorPlugin</a>[]

---

##### `serviceExecutionRoleArnInput`<sup>Optional</sup> <a name="serviceExecutionRoleArnInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.serviceExecutionRoleArnInput"></a>

```typescript
public readonly serviceExecutionRoleArnInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: MskconnectConnectorTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeouts">MskconnectConnectorTimeouts</a> | cdktf.IResolvable

---

##### `workerConfigurationInput`<sup>Optional</sup> <a name="workerConfigurationInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.workerConfigurationInput"></a>

```typescript
public readonly workerConfigurationInput: MskconnectConnectorWorkerConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfiguration">MskconnectConnectorWorkerConfiguration</a>

---

##### `connectorConfiguration`<sup>Required</sup> <a name="connectorConfiguration" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.connectorConfiguration"></a>

```typescript
public readonly connectorConfiguration: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kafkaconnectVersion`<sup>Required</sup> <a name="kafkaconnectVersion" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.kafkaconnectVersion"></a>

```typescript
public readonly kafkaconnectVersion: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `serviceExecutionRoleArn`<sup>Required</sup> <a name="serviceExecutionRoleArn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.serviceExecutionRoleArn"></a>

```typescript
public readonly serviceExecutionRoleArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MskconnectConnectorCapacity <a name="MskconnectConnectorCapacity" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacity.Initializer"></a>

```typescript
import { mskconnectConnector } from '@cdktf/provider-aws'

const mskconnectConnectorCapacity: mskconnectConnector.MskconnectConnectorCapacity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacity.property.autoscaling">autoscaling</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscaling">MskconnectConnectorCapacityAutoscaling</a></code> | autoscaling block. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacity.property.provisionedCapacity">provisionedCapacity</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacity">MskconnectConnectorCapacityProvisionedCapacity</a></code> | provisioned_capacity block. |

---

##### `autoscaling`<sup>Optional</sup> <a name="autoscaling" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacity.property.autoscaling"></a>

```typescript
public readonly autoscaling: MskconnectConnectorCapacityAutoscaling;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscaling">MskconnectConnectorCapacityAutoscaling</a>

autoscaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#autoscaling MskconnectConnector#autoscaling}

---

##### `provisionedCapacity`<sup>Optional</sup> <a name="provisionedCapacity" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacity.property.provisionedCapacity"></a>

```typescript
public readonly provisionedCapacity: MskconnectConnectorCapacityProvisionedCapacity;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacity">MskconnectConnectorCapacityProvisionedCapacity</a>

provisioned_capacity block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#provisioned_capacity MskconnectConnector#provisioned_capacity}

---

### MskconnectConnectorCapacityAutoscaling <a name="MskconnectConnectorCapacityAutoscaling" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscaling.Initializer"></a>

```typescript
import { mskconnectConnector } from '@cdktf/provider-aws'

const mskconnectConnectorCapacityAutoscaling: mskconnectConnector.MskconnectConnectorCapacityAutoscaling = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscaling.property.maxWorkerCount">maxWorkerCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#max_worker_count MskconnectConnector#max_worker_count}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscaling.property.minWorkerCount">minWorkerCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#min_worker_count MskconnectConnector#min_worker_count}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscaling.property.mcuCount">mcuCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#mcu_count MskconnectConnector#mcu_count}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscaling.property.scaleInPolicy">scaleInPolicy</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicy">MskconnectConnectorCapacityAutoscalingScaleInPolicy</a></code> | scale_in_policy block. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscaling.property.scaleOutPolicy">scaleOutPolicy</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicy">MskconnectConnectorCapacityAutoscalingScaleOutPolicy</a></code> | scale_out_policy block. |

---

##### `maxWorkerCount`<sup>Required</sup> <a name="maxWorkerCount" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscaling.property.maxWorkerCount"></a>

```typescript
public readonly maxWorkerCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#max_worker_count MskconnectConnector#max_worker_count}.

---

##### `minWorkerCount`<sup>Required</sup> <a name="minWorkerCount" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscaling.property.minWorkerCount"></a>

```typescript
public readonly minWorkerCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#min_worker_count MskconnectConnector#min_worker_count}.

---

##### `mcuCount`<sup>Optional</sup> <a name="mcuCount" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscaling.property.mcuCount"></a>

```typescript
public readonly mcuCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#mcu_count MskconnectConnector#mcu_count}.

---

##### `scaleInPolicy`<sup>Optional</sup> <a name="scaleInPolicy" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscaling.property.scaleInPolicy"></a>

```typescript
public readonly scaleInPolicy: MskconnectConnectorCapacityAutoscalingScaleInPolicy;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicy">MskconnectConnectorCapacityAutoscalingScaleInPolicy</a>

scale_in_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#scale_in_policy MskconnectConnector#scale_in_policy}

---

##### `scaleOutPolicy`<sup>Optional</sup> <a name="scaleOutPolicy" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscaling.property.scaleOutPolicy"></a>

```typescript
public readonly scaleOutPolicy: MskconnectConnectorCapacityAutoscalingScaleOutPolicy;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicy">MskconnectConnectorCapacityAutoscalingScaleOutPolicy</a>

scale_out_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#scale_out_policy MskconnectConnector#scale_out_policy}

---

### MskconnectConnectorCapacityAutoscalingScaleInPolicy <a name="MskconnectConnectorCapacityAutoscalingScaleInPolicy" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicy.Initializer"></a>

```typescript
import { mskconnectConnector } from '@cdktf/provider-aws'

const mskconnectConnectorCapacityAutoscalingScaleInPolicy: mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicy.property.cpuUtilizationPercentage">cpuUtilizationPercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#cpu_utilization_percentage MskconnectConnector#cpu_utilization_percentage}. |

---

##### `cpuUtilizationPercentage`<sup>Optional</sup> <a name="cpuUtilizationPercentage" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicy.property.cpuUtilizationPercentage"></a>

```typescript
public readonly cpuUtilizationPercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#cpu_utilization_percentage MskconnectConnector#cpu_utilization_percentage}.

---

### MskconnectConnectorCapacityAutoscalingScaleOutPolicy <a name="MskconnectConnectorCapacityAutoscalingScaleOutPolicy" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicy.Initializer"></a>

```typescript
import { mskconnectConnector } from '@cdktf/provider-aws'

const mskconnectConnectorCapacityAutoscalingScaleOutPolicy: mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicy.property.cpuUtilizationPercentage">cpuUtilizationPercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#cpu_utilization_percentage MskconnectConnector#cpu_utilization_percentage}. |

---

##### `cpuUtilizationPercentage`<sup>Optional</sup> <a name="cpuUtilizationPercentage" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicy.property.cpuUtilizationPercentage"></a>

```typescript
public readonly cpuUtilizationPercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#cpu_utilization_percentage MskconnectConnector#cpu_utilization_percentage}.

---

### MskconnectConnectorCapacityProvisionedCapacity <a name="MskconnectConnectorCapacityProvisionedCapacity" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacity.Initializer"></a>

```typescript
import { mskconnectConnector } from '@cdktf/provider-aws'

const mskconnectConnectorCapacityProvisionedCapacity: mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacity.property.workerCount">workerCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#worker_count MskconnectConnector#worker_count}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacity.property.mcuCount">mcuCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#mcu_count MskconnectConnector#mcu_count}. |

---

##### `workerCount`<sup>Required</sup> <a name="workerCount" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacity.property.workerCount"></a>

```typescript
public readonly workerCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#worker_count MskconnectConnector#worker_count}.

---

##### `mcuCount`<sup>Optional</sup> <a name="mcuCount" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacity.property.mcuCount"></a>

```typescript
public readonly mcuCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#mcu_count MskconnectConnector#mcu_count}.

---

### MskconnectConnectorConfig <a name="MskconnectConnectorConfig" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.Initializer"></a>

```typescript
import { mskconnectConnector } from '@cdktf/provider-aws'

const mskconnectConnectorConfig: mskconnectConnector.MskconnectConnectorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.capacity">capacity</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacity">MskconnectConnectorCapacity</a></code> | capacity block. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.connectorConfiguration">connectorConfiguration</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#connector_configuration MskconnectConnector#connector_configuration}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.kafkaCluster">kafkaCluster</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaCluster">MskconnectConnectorKafkaCluster</a></code> | kafka_cluster block. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.kafkaClusterClientAuthentication">kafkaClusterClientAuthentication</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthentication">MskconnectConnectorKafkaClusterClientAuthentication</a></code> | kafka_cluster_client_authentication block. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.kafkaClusterEncryptionInTransit">kafkaClusterEncryptionInTransit</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransit">MskconnectConnectorKafkaClusterEncryptionInTransit</a></code> | kafka_cluster_encryption_in_transit block. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.kafkaconnectVersion">kafkaconnectVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#kafkaconnect_version MskconnectConnector#kafkaconnect_version}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#name MskconnectConnector#name}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.plugin">plugin</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPlugin">MskconnectConnectorPlugin</a>[]</code> | plugin block. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.serviceExecutionRoleArn">serviceExecutionRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#service_execution_role_arn MskconnectConnector#service_execution_role_arn}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#description MskconnectConnector#description}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#id MskconnectConnector#id}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.logDelivery">logDelivery</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDelivery">MskconnectConnectorLogDelivery</a></code> | log_delivery block. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeouts">MskconnectConnectorTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.workerConfiguration">workerConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfiguration">MskconnectConnectorWorkerConfiguration</a></code> | worker_configuration block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.capacity"></a>

```typescript
public readonly capacity: MskconnectConnectorCapacity;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacity">MskconnectConnectorCapacity</a>

capacity block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#capacity MskconnectConnector#capacity}

---

##### `connectorConfiguration`<sup>Required</sup> <a name="connectorConfiguration" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.connectorConfiguration"></a>

```typescript
public readonly connectorConfiguration: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#connector_configuration MskconnectConnector#connector_configuration}.

---

##### `kafkaCluster`<sup>Required</sup> <a name="kafkaCluster" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.kafkaCluster"></a>

```typescript
public readonly kafkaCluster: MskconnectConnectorKafkaCluster;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaCluster">MskconnectConnectorKafkaCluster</a>

kafka_cluster block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#kafka_cluster MskconnectConnector#kafka_cluster}

---

##### `kafkaClusterClientAuthentication`<sup>Required</sup> <a name="kafkaClusterClientAuthentication" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.kafkaClusterClientAuthentication"></a>

```typescript
public readonly kafkaClusterClientAuthentication: MskconnectConnectorKafkaClusterClientAuthentication;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthentication">MskconnectConnectorKafkaClusterClientAuthentication</a>

kafka_cluster_client_authentication block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#kafka_cluster_client_authentication MskconnectConnector#kafka_cluster_client_authentication}

---

##### `kafkaClusterEncryptionInTransit`<sup>Required</sup> <a name="kafkaClusterEncryptionInTransit" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.kafkaClusterEncryptionInTransit"></a>

```typescript
public readonly kafkaClusterEncryptionInTransit: MskconnectConnectorKafkaClusterEncryptionInTransit;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransit">MskconnectConnectorKafkaClusterEncryptionInTransit</a>

kafka_cluster_encryption_in_transit block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#kafka_cluster_encryption_in_transit MskconnectConnector#kafka_cluster_encryption_in_transit}

---

##### `kafkaconnectVersion`<sup>Required</sup> <a name="kafkaconnectVersion" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.kafkaconnectVersion"></a>

```typescript
public readonly kafkaconnectVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#kafkaconnect_version MskconnectConnector#kafkaconnect_version}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#name MskconnectConnector#name}.

---

##### `plugin`<sup>Required</sup> <a name="plugin" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.plugin"></a>

```typescript
public readonly plugin: IResolvable | MskconnectConnectorPlugin[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPlugin">MskconnectConnectorPlugin</a>[]

plugin block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#plugin MskconnectConnector#plugin}

---

##### `serviceExecutionRoleArn`<sup>Required</sup> <a name="serviceExecutionRoleArn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.serviceExecutionRoleArn"></a>

```typescript
public readonly serviceExecutionRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#service_execution_role_arn MskconnectConnector#service_execution_role_arn}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#description MskconnectConnector#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#id MskconnectConnector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logDelivery`<sup>Optional</sup> <a name="logDelivery" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.logDelivery"></a>

```typescript
public readonly logDelivery: MskconnectConnectorLogDelivery;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDelivery">MskconnectConnectorLogDelivery</a>

log_delivery block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#log_delivery MskconnectConnector#log_delivery}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MskconnectConnectorTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeouts">MskconnectConnectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#timeouts MskconnectConnector#timeouts}

---

##### `workerConfiguration`<sup>Optional</sup> <a name="workerConfiguration" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.workerConfiguration"></a>

```typescript
public readonly workerConfiguration: MskconnectConnectorWorkerConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfiguration">MskconnectConnectorWorkerConfiguration</a>

worker_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#worker_configuration MskconnectConnector#worker_configuration}

---

### MskconnectConnectorKafkaCluster <a name="MskconnectConnectorKafkaCluster" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaCluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaCluster.Initializer"></a>

```typescript
import { mskconnectConnector } from '@cdktf/provider-aws'

const mskconnectConnectorKafkaCluster: mskconnectConnector.MskconnectConnectorKafkaCluster = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaCluster.property.apacheKafkaCluster">apacheKafkaCluster</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaCluster">MskconnectConnectorKafkaClusterApacheKafkaCluster</a></code> | apache_kafka_cluster block. |

---

##### `apacheKafkaCluster`<sup>Required</sup> <a name="apacheKafkaCluster" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaCluster.property.apacheKafkaCluster"></a>

```typescript
public readonly apacheKafkaCluster: MskconnectConnectorKafkaClusterApacheKafkaCluster;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaCluster">MskconnectConnectorKafkaClusterApacheKafkaCluster</a>

apache_kafka_cluster block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#apache_kafka_cluster MskconnectConnector#apache_kafka_cluster}

---

### MskconnectConnectorKafkaClusterApacheKafkaCluster <a name="MskconnectConnectorKafkaClusterApacheKafkaCluster" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaCluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaCluster.Initializer"></a>

```typescript
import { mskconnectConnector } from '@cdktf/provider-aws'

const mskconnectConnectorKafkaClusterApacheKafkaCluster: mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaCluster = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaCluster.property.bootstrapServers">bootstrapServers</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#bootstrap_servers MskconnectConnector#bootstrap_servers}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaCluster.property.vpc">vpc</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpc">MskconnectConnectorKafkaClusterApacheKafkaClusterVpc</a></code> | vpc block. |

---

##### `bootstrapServers`<sup>Required</sup> <a name="bootstrapServers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaCluster.property.bootstrapServers"></a>

```typescript
public readonly bootstrapServers: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#bootstrap_servers MskconnectConnector#bootstrap_servers}.

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaCluster.property.vpc"></a>

```typescript
public readonly vpc: MskconnectConnectorKafkaClusterApacheKafkaClusterVpc;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpc">MskconnectConnectorKafkaClusterApacheKafkaClusterVpc</a>

vpc block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#vpc MskconnectConnector#vpc}

---

### MskconnectConnectorKafkaClusterApacheKafkaClusterVpc <a name="MskconnectConnectorKafkaClusterApacheKafkaClusterVpc" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpc.Initializer"></a>

```typescript
import { mskconnectConnector } from '@cdktf/provider-aws'

const mskconnectConnectorKafkaClusterApacheKafkaClusterVpc: mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpc = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpc.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#security_groups MskconnectConnector#security_groups}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpc.property.subnets">subnets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#subnets MskconnectConnector#subnets}. |

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpc.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#security_groups MskconnectConnector#security_groups}.

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpc.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#subnets MskconnectConnector#subnets}.

---

### MskconnectConnectorKafkaClusterClientAuthentication <a name="MskconnectConnectorKafkaClusterClientAuthentication" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthentication.Initializer"></a>

```typescript
import { mskconnectConnector } from '@cdktf/provider-aws'

const mskconnectConnectorKafkaClusterClientAuthentication: mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthentication = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthentication.property.authenticationType">authenticationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#authentication_type MskconnectConnector#authentication_type}. |

---

##### `authenticationType`<sup>Optional</sup> <a name="authenticationType" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthentication.property.authenticationType"></a>

```typescript
public readonly authenticationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#authentication_type MskconnectConnector#authentication_type}.

---

### MskconnectConnectorKafkaClusterEncryptionInTransit <a name="MskconnectConnectorKafkaClusterEncryptionInTransit" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransit.Initializer"></a>

```typescript
import { mskconnectConnector } from '@cdktf/provider-aws'

const mskconnectConnectorKafkaClusterEncryptionInTransit: mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransit = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransit.property.encryptionType">encryptionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#encryption_type MskconnectConnector#encryption_type}. |

---

##### `encryptionType`<sup>Optional</sup> <a name="encryptionType" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransit.property.encryptionType"></a>

```typescript
public readonly encryptionType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#encryption_type MskconnectConnector#encryption_type}.

---

### MskconnectConnectorLogDelivery <a name="MskconnectConnectorLogDelivery" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDelivery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDelivery.Initializer"></a>

```typescript
import { mskconnectConnector } from '@cdktf/provider-aws'

const mskconnectConnectorLogDelivery: mskconnectConnector.MskconnectConnectorLogDelivery = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDelivery.property.workerLogDelivery">workerLogDelivery</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDelivery">MskconnectConnectorLogDeliveryWorkerLogDelivery</a></code> | worker_log_delivery block. |

---

##### `workerLogDelivery`<sup>Required</sup> <a name="workerLogDelivery" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDelivery.property.workerLogDelivery"></a>

```typescript
public readonly workerLogDelivery: MskconnectConnectorLogDeliveryWorkerLogDelivery;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDelivery">MskconnectConnectorLogDeliveryWorkerLogDelivery</a>

worker_log_delivery block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#worker_log_delivery MskconnectConnector#worker_log_delivery}

---

### MskconnectConnectorLogDeliveryWorkerLogDelivery <a name="MskconnectConnectorLogDeliveryWorkerLogDelivery" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDelivery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDelivery.Initializer"></a>

```typescript
import { mskconnectConnector } from '@cdktf/provider-aws'

const mskconnectConnectorLogDeliveryWorkerLogDelivery: mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDelivery = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDelivery.property.cloudwatchLogs">cloudwatchLogs</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs">MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs</a></code> | cloudwatch_logs block. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDelivery.property.firehose">firehose</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose">MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose</a></code> | firehose block. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDelivery.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3">MskconnectConnectorLogDeliveryWorkerLogDeliveryS3</a></code> | s3 block. |

---

##### `cloudwatchLogs`<sup>Optional</sup> <a name="cloudwatchLogs" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDelivery.property.cloudwatchLogs"></a>

```typescript
public readonly cloudwatchLogs: MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs">MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs</a>

cloudwatch_logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#cloudwatch_logs MskconnectConnector#cloudwatch_logs}

---

##### `firehose`<sup>Optional</sup> <a name="firehose" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDelivery.property.firehose"></a>

```typescript
public readonly firehose: MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose">MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose</a>

firehose block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#firehose MskconnectConnector#firehose}

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDelivery.property.s3"></a>

```typescript
public readonly s3: MskconnectConnectorLogDeliveryWorkerLogDeliveryS3;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3">MskconnectConnectorLogDeliveryWorkerLogDeliveryS3</a>

s3 block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#s3 MskconnectConnector#s3}

---

### MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs <a name="MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs.Initializer"></a>

```typescript
import { mskconnectConnector } from '@cdktf/provider-aws'

const mskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs: mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#enabled MskconnectConnector#enabled}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs.property.logGroup">logGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#log_group MskconnectConnector#log_group}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#enabled MskconnectConnector#enabled}.

---

##### `logGroup`<sup>Optional</sup> <a name="logGroup" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs.property.logGroup"></a>

```typescript
public readonly logGroup: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#log_group MskconnectConnector#log_group}.

---

### MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose <a name="MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose.Initializer"></a>

```typescript
import { mskconnectConnector } from '@cdktf/provider-aws'

const mskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose: mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#enabled MskconnectConnector#enabled}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose.property.deliveryStream">deliveryStream</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#delivery_stream MskconnectConnector#delivery_stream}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#enabled MskconnectConnector#enabled}.

---

##### `deliveryStream`<sup>Optional</sup> <a name="deliveryStream" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose.property.deliveryStream"></a>

```typescript
public readonly deliveryStream: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#delivery_stream MskconnectConnector#delivery_stream}.

---

### MskconnectConnectorLogDeliveryWorkerLogDeliveryS3 <a name="MskconnectConnectorLogDeliveryWorkerLogDeliveryS3" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3.Initializer"></a>

```typescript
import { mskconnectConnector } from '@cdktf/provider-aws'

const mskconnectConnectorLogDeliveryWorkerLogDeliveryS3: mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#enabled MskconnectConnector#enabled}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#bucket MskconnectConnector#bucket}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3.property.prefix">prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#prefix MskconnectConnector#prefix}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#enabled MskconnectConnector#enabled}.

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#bucket MskconnectConnector#bucket}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#prefix MskconnectConnector#prefix}.

---

### MskconnectConnectorPlugin <a name="MskconnectConnectorPlugin" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPlugin"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPlugin.Initializer"></a>

```typescript
import { mskconnectConnector } from '@cdktf/provider-aws'

const mskconnectConnectorPlugin: mskconnectConnector.MskconnectConnectorPlugin = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPlugin.property.customPlugin">customPlugin</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPlugin">MskconnectConnectorPluginCustomPlugin</a></code> | custom_plugin block. |

---

##### `customPlugin`<sup>Required</sup> <a name="customPlugin" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPlugin.property.customPlugin"></a>

```typescript
public readonly customPlugin: MskconnectConnectorPluginCustomPlugin;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPlugin">MskconnectConnectorPluginCustomPlugin</a>

custom_plugin block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#custom_plugin MskconnectConnector#custom_plugin}

---

### MskconnectConnectorPluginCustomPlugin <a name="MskconnectConnectorPluginCustomPlugin" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPlugin"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPlugin.Initializer"></a>

```typescript
import { mskconnectConnector } from '@cdktf/provider-aws'

const mskconnectConnectorPluginCustomPlugin: mskconnectConnector.MskconnectConnectorPluginCustomPlugin = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPlugin.property.arn">arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#arn MskconnectConnector#arn}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPlugin.property.revision">revision</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#revision MskconnectConnector#revision}. |

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPlugin.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#arn MskconnectConnector#arn}.

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPlugin.property.revision"></a>

```typescript
public readonly revision: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#revision MskconnectConnector#revision}.

---

### MskconnectConnectorTimeouts <a name="MskconnectConnectorTimeouts" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeouts.Initializer"></a>

```typescript
import { mskconnectConnector } from '@cdktf/provider-aws'

const mskconnectConnectorTimeouts: mskconnectConnector.MskconnectConnectorTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#create MskconnectConnector#create}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#delete MskconnectConnector#delete}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#update MskconnectConnector#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#create MskconnectConnector#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#delete MskconnectConnector#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#update MskconnectConnector#update}.

---

### MskconnectConnectorWorkerConfiguration <a name="MskconnectConnectorWorkerConfiguration" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfiguration.Initializer"></a>

```typescript
import { mskconnectConnector } from '@cdktf/provider-aws'

const mskconnectConnectorWorkerConfiguration: mskconnectConnector.MskconnectConnectorWorkerConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfiguration.property.arn">arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#arn MskconnectConnector#arn}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfiguration.property.revision">revision</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#revision MskconnectConnector#revision}. |

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfiguration.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#arn MskconnectConnector#arn}.

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfiguration.property.revision"></a>

```typescript
public readonly revision: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#revision MskconnectConnector#revision}.

---

## Classes <a name="Classes" id="Classes"></a>

### MskconnectConnectorCapacityAutoscalingOutputReference <a name="MskconnectConnectorCapacityAutoscalingOutputReference" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.Initializer"></a>

```typescript
import { mskconnectConnector } from '@cdktf/provider-aws'

new mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.putScaleInPolicy">putScaleInPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.putScaleOutPolicy">putScaleOutPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.resetMcuCount">resetMcuCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.resetScaleInPolicy">resetScaleInPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.resetScaleOutPolicy">resetScaleOutPolicy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putScaleInPolicy` <a name="putScaleInPolicy" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.putScaleInPolicy"></a>

```typescript
public putScaleInPolicy(value: MskconnectConnectorCapacityAutoscalingScaleInPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.putScaleInPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicy">MskconnectConnectorCapacityAutoscalingScaleInPolicy</a>

---

##### `putScaleOutPolicy` <a name="putScaleOutPolicy" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.putScaleOutPolicy"></a>

```typescript
public putScaleOutPolicy(value: MskconnectConnectorCapacityAutoscalingScaleOutPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.putScaleOutPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicy">MskconnectConnectorCapacityAutoscalingScaleOutPolicy</a>

---

##### `resetMcuCount` <a name="resetMcuCount" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.resetMcuCount"></a>

```typescript
public resetMcuCount(): void
```

##### `resetScaleInPolicy` <a name="resetScaleInPolicy" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.resetScaleInPolicy"></a>

```typescript
public resetScaleInPolicy(): void
```

##### `resetScaleOutPolicy` <a name="resetScaleOutPolicy" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.resetScaleOutPolicy"></a>

```typescript
public resetScaleOutPolicy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.scaleInPolicy">scaleInPolicy</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference">MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.scaleOutPolicy">scaleOutPolicy</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference">MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.maxWorkerCountInput">maxWorkerCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.mcuCountInput">mcuCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.minWorkerCountInput">minWorkerCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.scaleInPolicyInput">scaleInPolicyInput</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicy">MskconnectConnectorCapacityAutoscalingScaleInPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.scaleOutPolicyInput">scaleOutPolicyInput</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicy">MskconnectConnectorCapacityAutoscalingScaleOutPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.maxWorkerCount">maxWorkerCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.mcuCount">mcuCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.minWorkerCount">minWorkerCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscaling">MskconnectConnectorCapacityAutoscaling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scaleInPolicy`<sup>Required</sup> <a name="scaleInPolicy" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.scaleInPolicy"></a>

```typescript
public readonly scaleInPolicy: MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference">MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference</a>

---

##### `scaleOutPolicy`<sup>Required</sup> <a name="scaleOutPolicy" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.scaleOutPolicy"></a>

```typescript
public readonly scaleOutPolicy: MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference">MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference</a>

---

##### `maxWorkerCountInput`<sup>Optional</sup> <a name="maxWorkerCountInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.maxWorkerCountInput"></a>

```typescript
public readonly maxWorkerCountInput: number;
```

- *Type:* number

---

##### `mcuCountInput`<sup>Optional</sup> <a name="mcuCountInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.mcuCountInput"></a>

```typescript
public readonly mcuCountInput: number;
```

- *Type:* number

---

##### `minWorkerCountInput`<sup>Optional</sup> <a name="minWorkerCountInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.minWorkerCountInput"></a>

```typescript
public readonly minWorkerCountInput: number;
```

- *Type:* number

---

##### `scaleInPolicyInput`<sup>Optional</sup> <a name="scaleInPolicyInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.scaleInPolicyInput"></a>

```typescript
public readonly scaleInPolicyInput: MskconnectConnectorCapacityAutoscalingScaleInPolicy;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicy">MskconnectConnectorCapacityAutoscalingScaleInPolicy</a>

---

##### `scaleOutPolicyInput`<sup>Optional</sup> <a name="scaleOutPolicyInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.scaleOutPolicyInput"></a>

```typescript
public readonly scaleOutPolicyInput: MskconnectConnectorCapacityAutoscalingScaleOutPolicy;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicy">MskconnectConnectorCapacityAutoscalingScaleOutPolicy</a>

---

##### `maxWorkerCount`<sup>Required</sup> <a name="maxWorkerCount" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.maxWorkerCount"></a>

```typescript
public readonly maxWorkerCount: number;
```

- *Type:* number

---

##### `mcuCount`<sup>Required</sup> <a name="mcuCount" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.mcuCount"></a>

```typescript
public readonly mcuCount: number;
```

- *Type:* number

---

##### `minWorkerCount`<sup>Required</sup> <a name="minWorkerCount" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.minWorkerCount"></a>

```typescript
public readonly minWorkerCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MskconnectConnectorCapacityAutoscaling;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscaling">MskconnectConnectorCapacityAutoscaling</a>

---


### MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference <a name="MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.Initializer"></a>

```typescript
import { mskconnectConnector } from '@cdktf/provider-aws'

new mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.resetCpuUtilizationPercentage">resetCpuUtilizationPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCpuUtilizationPercentage` <a name="resetCpuUtilizationPercentage" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.resetCpuUtilizationPercentage"></a>

```typescript
public resetCpuUtilizationPercentage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.property.cpuUtilizationPercentageInput">cpuUtilizationPercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.property.cpuUtilizationPercentage">cpuUtilizationPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicy">MskconnectConnectorCapacityAutoscalingScaleInPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cpuUtilizationPercentageInput`<sup>Optional</sup> <a name="cpuUtilizationPercentageInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.property.cpuUtilizationPercentageInput"></a>

```typescript
public readonly cpuUtilizationPercentageInput: number;
```

- *Type:* number

---

##### `cpuUtilizationPercentage`<sup>Required</sup> <a name="cpuUtilizationPercentage" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.property.cpuUtilizationPercentage"></a>

```typescript
public readonly cpuUtilizationPercentage: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MskconnectConnectorCapacityAutoscalingScaleInPolicy;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicy">MskconnectConnectorCapacityAutoscalingScaleInPolicy</a>

---


### MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference <a name="MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.Initializer"></a>

```typescript
import { mskconnectConnector } from '@cdktf/provider-aws'

new mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.resetCpuUtilizationPercentage">resetCpuUtilizationPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCpuUtilizationPercentage` <a name="resetCpuUtilizationPercentage" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.resetCpuUtilizationPercentage"></a>

```typescript
public resetCpuUtilizationPercentage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.property.cpuUtilizationPercentageInput">cpuUtilizationPercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.property.cpuUtilizationPercentage">cpuUtilizationPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicy">MskconnectConnectorCapacityAutoscalingScaleOutPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cpuUtilizationPercentageInput`<sup>Optional</sup> <a name="cpuUtilizationPercentageInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.property.cpuUtilizationPercentageInput"></a>

```typescript
public readonly cpuUtilizationPercentageInput: number;
```

- *Type:* number

---

##### `cpuUtilizationPercentage`<sup>Required</sup> <a name="cpuUtilizationPercentage" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.property.cpuUtilizationPercentage"></a>

```typescript
public readonly cpuUtilizationPercentage: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MskconnectConnectorCapacityAutoscalingScaleOutPolicy;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicy">MskconnectConnectorCapacityAutoscalingScaleOutPolicy</a>

---


### MskconnectConnectorCapacityOutputReference <a name="MskconnectConnectorCapacityOutputReference" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.Initializer"></a>

```typescript
import { mskconnectConnector } from '@cdktf/provider-aws'

new mskconnectConnector.MskconnectConnectorCapacityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.putAutoscaling">putAutoscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.putProvisionedCapacity">putProvisionedCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.resetAutoscaling">resetAutoscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.resetProvisionedCapacity">resetProvisionedCapacity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAutoscaling` <a name="putAutoscaling" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.putAutoscaling"></a>

```typescript
public putAutoscaling(value: MskconnectConnectorCapacityAutoscaling): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.putAutoscaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscaling">MskconnectConnectorCapacityAutoscaling</a>

---

##### `putProvisionedCapacity` <a name="putProvisionedCapacity" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.putProvisionedCapacity"></a>

```typescript
public putProvisionedCapacity(value: MskconnectConnectorCapacityProvisionedCapacity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.putProvisionedCapacity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacity">MskconnectConnectorCapacityProvisionedCapacity</a>

---

##### `resetAutoscaling` <a name="resetAutoscaling" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.resetAutoscaling"></a>

```typescript
public resetAutoscaling(): void
```

##### `resetProvisionedCapacity` <a name="resetProvisionedCapacity" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.resetProvisionedCapacity"></a>

```typescript
public resetProvisionedCapacity(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.property.autoscaling">autoscaling</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference">MskconnectConnectorCapacityAutoscalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.property.provisionedCapacity">provisionedCapacity</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference">MskconnectConnectorCapacityProvisionedCapacityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.property.autoscalingInput">autoscalingInput</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscaling">MskconnectConnectorCapacityAutoscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.property.provisionedCapacityInput">provisionedCapacityInput</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacity">MskconnectConnectorCapacityProvisionedCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacity">MskconnectConnectorCapacity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoscaling`<sup>Required</sup> <a name="autoscaling" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.property.autoscaling"></a>

```typescript
public readonly autoscaling: MskconnectConnectorCapacityAutoscalingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference">MskconnectConnectorCapacityAutoscalingOutputReference</a>

---

##### `provisionedCapacity`<sup>Required</sup> <a name="provisionedCapacity" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.property.provisionedCapacity"></a>

```typescript
public readonly provisionedCapacity: MskconnectConnectorCapacityProvisionedCapacityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference">MskconnectConnectorCapacityProvisionedCapacityOutputReference</a>

---

##### `autoscalingInput`<sup>Optional</sup> <a name="autoscalingInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.property.autoscalingInput"></a>

```typescript
public readonly autoscalingInput: MskconnectConnectorCapacityAutoscaling;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscaling">MskconnectConnectorCapacityAutoscaling</a>

---

##### `provisionedCapacityInput`<sup>Optional</sup> <a name="provisionedCapacityInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.property.provisionedCapacityInput"></a>

```typescript
public readonly provisionedCapacityInput: MskconnectConnectorCapacityProvisionedCapacity;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacity">MskconnectConnectorCapacityProvisionedCapacity</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MskconnectConnectorCapacity;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacity">MskconnectConnectorCapacity</a>

---


### MskconnectConnectorCapacityProvisionedCapacityOutputReference <a name="MskconnectConnectorCapacityProvisionedCapacityOutputReference" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.Initializer"></a>

```typescript
import { mskconnectConnector } from '@cdktf/provider-aws'

new mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.resetMcuCount">resetMcuCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMcuCount` <a name="resetMcuCount" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.resetMcuCount"></a>

```typescript
public resetMcuCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.property.mcuCountInput">mcuCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.property.workerCountInput">workerCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.property.mcuCount">mcuCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.property.workerCount">workerCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacity">MskconnectConnectorCapacityProvisionedCapacity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mcuCountInput`<sup>Optional</sup> <a name="mcuCountInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.property.mcuCountInput"></a>

```typescript
public readonly mcuCountInput: number;
```

- *Type:* number

---

##### `workerCountInput`<sup>Optional</sup> <a name="workerCountInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.property.workerCountInput"></a>

```typescript
public readonly workerCountInput: number;
```

- *Type:* number

---

##### `mcuCount`<sup>Required</sup> <a name="mcuCount" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.property.mcuCount"></a>

```typescript
public readonly mcuCount: number;
```

- *Type:* number

---

##### `workerCount`<sup>Required</sup> <a name="workerCount" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.property.workerCount"></a>

```typescript
public readonly workerCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MskconnectConnectorCapacityProvisionedCapacity;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacity">MskconnectConnectorCapacityProvisionedCapacity</a>

---


### MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference <a name="MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.Initializer"></a>

```typescript
import { mskconnectConnector } from '@cdktf/provider-aws'

new mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.putVpc">putVpc</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putVpc` <a name="putVpc" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.putVpc"></a>

```typescript
public putVpc(value: MskconnectConnectorKafkaClusterApacheKafkaClusterVpc): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.putVpc.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpc">MskconnectConnectorKafkaClusterApacheKafkaClusterVpc</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.vpc">vpc</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference">MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.bootstrapServersInput">bootstrapServersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.vpcInput">vpcInput</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpc">MskconnectConnectorKafkaClusterApacheKafkaClusterVpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.bootstrapServers">bootstrapServers</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaCluster">MskconnectConnectorKafkaClusterApacheKafkaCluster</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.vpc"></a>

```typescript
public readonly vpc: MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference">MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference</a>

---

##### `bootstrapServersInput`<sup>Optional</sup> <a name="bootstrapServersInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.bootstrapServersInput"></a>

```typescript
public readonly bootstrapServersInput: string;
```

- *Type:* string

---

##### `vpcInput`<sup>Optional</sup> <a name="vpcInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.vpcInput"></a>

```typescript
public readonly vpcInput: MskconnectConnectorKafkaClusterApacheKafkaClusterVpc;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpc">MskconnectConnectorKafkaClusterApacheKafkaClusterVpc</a>

---

##### `bootstrapServers`<sup>Required</sup> <a name="bootstrapServers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.bootstrapServers"></a>

```typescript
public readonly bootstrapServers: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MskconnectConnectorKafkaClusterApacheKafkaCluster;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaCluster">MskconnectConnectorKafkaClusterApacheKafkaCluster</a>

---


### MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference <a name="MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.Initializer"></a>

```typescript
import { mskconnectConnector } from '@cdktf/provider-aws'

new mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.securityGroupsInput">securityGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.subnetsInput">subnetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.subnets">subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpc">MskconnectConnectorKafkaClusterApacheKafkaClusterVpc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `securityGroupsInput`<sup>Optional</sup> <a name="securityGroupsInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.securityGroupsInput"></a>

```typescript
public readonly securityGroupsInput: string[];
```

- *Type:* string[]

---

##### `subnetsInput`<sup>Optional</sup> <a name="subnetsInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.subnetsInput"></a>

```typescript
public readonly subnetsInput: string[];
```

- *Type:* string[]

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MskconnectConnectorKafkaClusterApacheKafkaClusterVpc;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpc">MskconnectConnectorKafkaClusterApacheKafkaClusterVpc</a>

---


### MskconnectConnectorKafkaClusterClientAuthenticationOutputReference <a name="MskconnectConnectorKafkaClusterClientAuthenticationOutputReference" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.Initializer"></a>

```typescript
import { mskconnectConnector } from '@cdktf/provider-aws'

new mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.resetAuthenticationType">resetAuthenticationType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthenticationType` <a name="resetAuthenticationType" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.resetAuthenticationType"></a>

```typescript
public resetAuthenticationType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.authenticationTypeInput">authenticationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.authenticationType">authenticationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthentication">MskconnectConnectorKafkaClusterClientAuthentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authenticationTypeInput`<sup>Optional</sup> <a name="authenticationTypeInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.authenticationTypeInput"></a>

```typescript
public readonly authenticationTypeInput: string;
```

- *Type:* string

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.authenticationType"></a>

```typescript
public readonly authenticationType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MskconnectConnectorKafkaClusterClientAuthentication;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthentication">MskconnectConnectorKafkaClusterClientAuthentication</a>

---


### MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference <a name="MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.Initializer"></a>

```typescript
import { mskconnectConnector } from '@cdktf/provider-aws'

new mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.resetEncryptionType">resetEncryptionType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEncryptionType` <a name="resetEncryptionType" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.resetEncryptionType"></a>

```typescript
public resetEncryptionType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.encryptionTypeInput">encryptionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.encryptionType">encryptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransit">MskconnectConnectorKafkaClusterEncryptionInTransit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryptionTypeInput`<sup>Optional</sup> <a name="encryptionTypeInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.encryptionTypeInput"></a>

```typescript
public readonly encryptionTypeInput: string;
```

- *Type:* string

---

##### `encryptionType`<sup>Required</sup> <a name="encryptionType" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.encryptionType"></a>

```typescript
public readonly encryptionType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MskconnectConnectorKafkaClusterEncryptionInTransit;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransit">MskconnectConnectorKafkaClusterEncryptionInTransit</a>

---


### MskconnectConnectorKafkaClusterOutputReference <a name="MskconnectConnectorKafkaClusterOutputReference" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.Initializer"></a>

```typescript
import { mskconnectConnector } from '@cdktf/provider-aws'

new mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.putApacheKafkaCluster">putApacheKafkaCluster</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApacheKafkaCluster` <a name="putApacheKafkaCluster" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.putApacheKafkaCluster"></a>

```typescript
public putApacheKafkaCluster(value: MskconnectConnectorKafkaClusterApacheKafkaCluster): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.putApacheKafkaCluster.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaCluster">MskconnectConnectorKafkaClusterApacheKafkaCluster</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.property.apacheKafkaCluster">apacheKafkaCluster</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference">MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.property.apacheKafkaClusterInput">apacheKafkaClusterInput</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaCluster">MskconnectConnectorKafkaClusterApacheKafkaCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaCluster">MskconnectConnectorKafkaCluster</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apacheKafkaCluster`<sup>Required</sup> <a name="apacheKafkaCluster" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.property.apacheKafkaCluster"></a>

```typescript
public readonly apacheKafkaCluster: MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference">MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference</a>

---

##### `apacheKafkaClusterInput`<sup>Optional</sup> <a name="apacheKafkaClusterInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.property.apacheKafkaClusterInput"></a>

```typescript
public readonly apacheKafkaClusterInput: MskconnectConnectorKafkaClusterApacheKafkaCluster;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaCluster">MskconnectConnectorKafkaClusterApacheKafkaCluster</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MskconnectConnectorKafkaCluster;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaCluster">MskconnectConnectorKafkaCluster</a>

---


### MskconnectConnectorLogDeliveryOutputReference <a name="MskconnectConnectorLogDeliveryOutputReference" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.Initializer"></a>

```typescript
import { mskconnectConnector } from '@cdktf/provider-aws'

new mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.putWorkerLogDelivery">putWorkerLogDelivery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putWorkerLogDelivery` <a name="putWorkerLogDelivery" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.putWorkerLogDelivery"></a>

```typescript
public putWorkerLogDelivery(value: MskconnectConnectorLogDeliveryWorkerLogDelivery): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.putWorkerLogDelivery.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDelivery">MskconnectConnectorLogDeliveryWorkerLogDelivery</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.property.workerLogDelivery">workerLogDelivery</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference">MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.property.workerLogDeliveryInput">workerLogDeliveryInput</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDelivery">MskconnectConnectorLogDeliveryWorkerLogDelivery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDelivery">MskconnectConnectorLogDelivery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workerLogDelivery`<sup>Required</sup> <a name="workerLogDelivery" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.property.workerLogDelivery"></a>

```typescript
public readonly workerLogDelivery: MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference">MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference</a>

---

##### `workerLogDeliveryInput`<sup>Optional</sup> <a name="workerLogDeliveryInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.property.workerLogDeliveryInput"></a>

```typescript
public readonly workerLogDeliveryInput: MskconnectConnectorLogDeliveryWorkerLogDelivery;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDelivery">MskconnectConnectorLogDeliveryWorkerLogDelivery</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MskconnectConnectorLogDelivery;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDelivery">MskconnectConnectorLogDelivery</a>

---


### MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference <a name="MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.Initializer"></a>

```typescript
import { mskconnectConnector } from '@cdktf/provider-aws'

new mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.resetLogGroup">resetLogGroup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLogGroup` <a name="resetLogGroup" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.resetLogGroup"></a>

```typescript
public resetLogGroup(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.logGroupInput">logGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.logGroup">logGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs">MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `logGroupInput`<sup>Optional</sup> <a name="logGroupInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.logGroupInput"></a>

```typescript
public readonly logGroupInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.logGroup"></a>

```typescript
public readonly logGroup: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs">MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs</a>

---


### MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference <a name="MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.Initializer"></a>

```typescript
import { mskconnectConnector } from '@cdktf/provider-aws'

new mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.resetDeliveryStream">resetDeliveryStream</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeliveryStream` <a name="resetDeliveryStream" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.resetDeliveryStream"></a>

```typescript
public resetDeliveryStream(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.deliveryStreamInput">deliveryStreamInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.deliveryStream">deliveryStream</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose">MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deliveryStreamInput`<sup>Optional</sup> <a name="deliveryStreamInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.deliveryStreamInput"></a>

```typescript
public readonly deliveryStreamInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deliveryStream`<sup>Required</sup> <a name="deliveryStream" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.deliveryStream"></a>

```typescript
public readonly deliveryStream: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose">MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose</a>

---


### MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference <a name="MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.Initializer"></a>

```typescript
import { mskconnectConnector } from '@cdktf/provider-aws'

new mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putCloudwatchLogs">putCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putFirehose">putFirehose</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putS3">putS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resetCloudwatchLogs">resetCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resetFirehose">resetFirehose</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resetS3">resetS3</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudwatchLogs` <a name="putCloudwatchLogs" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putCloudwatchLogs"></a>

```typescript
public putCloudwatchLogs(value: MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putCloudwatchLogs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs">MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs</a>

---

##### `putFirehose` <a name="putFirehose" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putFirehose"></a>

```typescript
public putFirehose(value: MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putFirehose.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose">MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose</a>

---

##### `putS3` <a name="putS3" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putS3"></a>

```typescript
public putS3(value: MskconnectConnectorLogDeliveryWorkerLogDeliveryS3): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3">MskconnectConnectorLogDeliveryWorkerLogDeliveryS3</a>

---

##### `resetCloudwatchLogs` <a name="resetCloudwatchLogs" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resetCloudwatchLogs"></a>

```typescript
public resetCloudwatchLogs(): void
```

##### `resetFirehose` <a name="resetFirehose" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resetFirehose"></a>

```typescript
public resetFirehose(): void
```

##### `resetS3` <a name="resetS3" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resetS3"></a>

```typescript
public resetS3(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.cloudwatchLogs">cloudwatchLogs</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference">MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.firehose">firehose</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference">MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference">MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.cloudwatchLogsInput">cloudwatchLogsInput</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs">MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.firehoseInput">firehoseInput</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose">MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.s3Input">s3Input</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3">MskconnectConnectorLogDeliveryWorkerLogDeliveryS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDelivery">MskconnectConnectorLogDeliveryWorkerLogDelivery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudwatchLogs`<sup>Required</sup> <a name="cloudwatchLogs" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.cloudwatchLogs"></a>

```typescript
public readonly cloudwatchLogs: MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference">MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference</a>

---

##### `firehose`<sup>Required</sup> <a name="firehose" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.firehose"></a>

```typescript
public readonly firehose: MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference">MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference</a>

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.s3"></a>

```typescript
public readonly s3: MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference">MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference</a>

---

##### `cloudwatchLogsInput`<sup>Optional</sup> <a name="cloudwatchLogsInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.cloudwatchLogsInput"></a>

```typescript
public readonly cloudwatchLogsInput: MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs">MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs</a>

---

##### `firehoseInput`<sup>Optional</sup> <a name="firehoseInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.firehoseInput"></a>

```typescript
public readonly firehoseInput: MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose">MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose</a>

---

##### `s3Input`<sup>Optional</sup> <a name="s3Input" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.s3Input"></a>

```typescript
public readonly s3Input: MskconnectConnectorLogDeliveryWorkerLogDeliveryS3;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3">MskconnectConnectorLogDeliveryWorkerLogDeliveryS3</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MskconnectConnectorLogDeliveryWorkerLogDelivery;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDelivery">MskconnectConnectorLogDeliveryWorkerLogDelivery</a>

---


### MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference <a name="MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.Initializer"></a>

```typescript
import { mskconnectConnector } from '@cdktf/provider-aws'

new mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.resetBucket"></a>

```typescript
public resetBucket(): void
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.resetPrefix"></a>

```typescript
public resetPrefix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3">MskconnectConnectorLogDeliveryWorkerLogDeliveryS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MskconnectConnectorLogDeliveryWorkerLogDeliveryS3;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3">MskconnectConnectorLogDeliveryWorkerLogDeliveryS3</a>

---


### MskconnectConnectorPluginCustomPluginOutputReference <a name="MskconnectConnectorPluginCustomPluginOutputReference" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.Initializer"></a>

```typescript
import { mskconnectConnector } from '@cdktf/provider-aws'

new mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.property.arnInput">arnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.property.revisionInput">revisionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.property.revision">revision</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPlugin">MskconnectConnectorPluginCustomPlugin</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.property.arnInput"></a>

```typescript
public readonly arnInput: string;
```

- *Type:* string

---

##### `revisionInput`<sup>Optional</sup> <a name="revisionInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.property.revisionInput"></a>

```typescript
public readonly revisionInput: number;
```

- *Type:* number

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.property.revision"></a>

```typescript
public readonly revision: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MskconnectConnectorPluginCustomPlugin;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPlugin">MskconnectConnectorPluginCustomPlugin</a>

---


### MskconnectConnectorPluginList <a name="MskconnectConnectorPluginList" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.Initializer"></a>

```typescript
import { mskconnectConnector } from '@cdktf/provider-aws'

new mskconnectConnector.MskconnectConnectorPluginList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.get"></a>

```typescript
public get(index: number): MskconnectConnectorPluginOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPlugin">MskconnectConnectorPlugin</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskconnectConnectorPlugin[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPlugin">MskconnectConnectorPlugin</a>[]

---


### MskconnectConnectorPluginOutputReference <a name="MskconnectConnectorPluginOutputReference" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.Initializer"></a>

```typescript
import { mskconnectConnector } from '@cdktf/provider-aws'

new mskconnectConnector.MskconnectConnectorPluginOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.putCustomPlugin">putCustomPlugin</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomPlugin` <a name="putCustomPlugin" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.putCustomPlugin"></a>

```typescript
public putCustomPlugin(value: MskconnectConnectorPluginCustomPlugin): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.putCustomPlugin.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPlugin">MskconnectConnectorPluginCustomPlugin</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.property.customPlugin">customPlugin</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference">MskconnectConnectorPluginCustomPluginOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.property.customPluginInput">customPluginInput</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPlugin">MskconnectConnectorPluginCustomPlugin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPlugin">MskconnectConnectorPlugin</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customPlugin`<sup>Required</sup> <a name="customPlugin" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.property.customPlugin"></a>

```typescript
public readonly customPlugin: MskconnectConnectorPluginCustomPluginOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference">MskconnectConnectorPluginCustomPluginOutputReference</a>

---

##### `customPluginInput`<sup>Optional</sup> <a name="customPluginInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.property.customPluginInput"></a>

```typescript
public readonly customPluginInput: MskconnectConnectorPluginCustomPlugin;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPlugin">MskconnectConnectorPluginCustomPlugin</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MskconnectConnectorPlugin | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPlugin">MskconnectConnectorPlugin</a> | cdktf.IResolvable

---


### MskconnectConnectorTimeoutsOutputReference <a name="MskconnectConnectorTimeoutsOutputReference" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.Initializer"></a>

```typescript
import { mskconnectConnector } from '@cdktf/provider-aws'

new mskconnectConnector.MskconnectConnectorTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeouts">MskconnectConnectorTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MskconnectConnectorTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeouts">MskconnectConnectorTimeouts</a> | cdktf.IResolvable

---


### MskconnectConnectorWorkerConfigurationOutputReference <a name="MskconnectConnectorWorkerConfigurationOutputReference" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.Initializer"></a>

```typescript
import { mskconnectConnector } from '@cdktf/provider-aws'

new mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.property.arnInput">arnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.property.revisionInput">revisionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.property.revision">revision</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfiguration">MskconnectConnectorWorkerConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.property.arnInput"></a>

```typescript
public readonly arnInput: string;
```

- *Type:* string

---

##### `revisionInput`<sup>Optional</sup> <a name="revisionInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.property.revisionInput"></a>

```typescript
public readonly revisionInput: number;
```

- *Type:* number

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.property.revision"></a>

```typescript
public readonly revision: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MskconnectConnectorWorkerConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfiguration">MskconnectConnectorWorkerConfiguration</a>

---



