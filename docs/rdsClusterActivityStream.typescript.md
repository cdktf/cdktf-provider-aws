# `rdsClusterActivityStream` Submodule <a name="`rdsClusterActivityStream` Submodule" id="@cdktf/provider-aws.rdsClusterActivityStream"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RdsClusterActivityStream <a name="RdsClusterActivityStream" id="@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_activity_stream aws_rds_cluster_activity_stream}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.Initializer"></a>

```typescript
import { rdsClusterActivityStream } from '@cdktf/provider-aws'

new rdsClusterActivityStream.RdsClusterActivityStream(scope: Construct, id: string, config: RdsClusterActivityStreamConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStreamConfig">RdsClusterActivityStreamConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStreamConfig">RdsClusterActivityStreamConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.resetEngineNativeAuditFieldsIncluded">resetEngineNativeAuditFieldsIncluded</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetEngineNativeAuditFieldsIncluded` <a name="resetEngineNativeAuditFieldsIncluded" id="@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.resetEngineNativeAuditFieldsIncluded"></a>

```typescript
public resetEngineNativeAuditFieldsIncluded(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.isConstruct"></a>

```typescript
import { rdsClusterActivityStream } from '@cdktf/provider-aws'

rdsClusterActivityStream.RdsClusterActivityStream.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.isTerraformElement"></a>

```typescript
import { rdsClusterActivityStream } from '@cdktf/provider-aws'

rdsClusterActivityStream.RdsClusterActivityStream.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.isTerraformResource"></a>

```typescript
import { rdsClusterActivityStream } from '@cdktf/provider-aws'

rdsClusterActivityStream.RdsClusterActivityStream.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.kinesisStreamName">kinesisStreamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.engineNativeAuditFieldsIncludedInput">engineNativeAuditFieldsIncludedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.resourceArnInput">resourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.engineNativeAuditFieldsIncluded">engineNativeAuditFieldsIncluded</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.resourceArn">resourceArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `kinesisStreamName`<sup>Required</sup> <a name="kinesisStreamName" id="@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.kinesisStreamName"></a>

```typescript
public readonly kinesisStreamName: string;
```

- *Type:* string

---

##### `engineNativeAuditFieldsIncludedInput`<sup>Optional</sup> <a name="engineNativeAuditFieldsIncludedInput" id="@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.engineNativeAuditFieldsIncludedInput"></a>

```typescript
public readonly engineNativeAuditFieldsIncludedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `resourceArnInput`<sup>Optional</sup> <a name="resourceArnInput" id="@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.resourceArnInput"></a>

```typescript
public readonly resourceArnInput: string;
```

- *Type:* string

---

##### `engineNativeAuditFieldsIncluded`<sup>Required</sup> <a name="engineNativeAuditFieldsIncluded" id="@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.engineNativeAuditFieldsIncluded"></a>

```typescript
public readonly engineNativeAuditFieldsIncluded: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStream.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RdsClusterActivityStreamConfig <a name="RdsClusterActivityStreamConfig" id="@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStreamConfig.Initializer"></a>

```typescript
import { rdsClusterActivityStream } from '@cdktf/provider-aws'

const rdsClusterActivityStreamConfig: rdsClusterActivityStream.RdsClusterActivityStreamConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStreamConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStreamConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStreamConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStreamConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStreamConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStreamConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStreamConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStreamConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_activity_stream#kms_key_id RdsClusterActivityStream#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStreamConfig.property.mode">mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_activity_stream#mode RdsClusterActivityStream#mode}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStreamConfig.property.resourceArn">resourceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_activity_stream#resource_arn RdsClusterActivityStream#resource_arn}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStreamConfig.property.engineNativeAuditFieldsIncluded">engineNativeAuditFieldsIncluded</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_activity_stream#engine_native_audit_fields_included RdsClusterActivityStream#engine_native_audit_fields_included}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStreamConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_activity_stream#id RdsClusterActivityStream#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStreamConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStreamConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStreamConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStreamConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStreamConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStreamConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStreamConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStreamConfig.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_activity_stream#kms_key_id RdsClusterActivityStream#kms_key_id}.

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStreamConfig.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_activity_stream#mode RdsClusterActivityStream#mode}.

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStreamConfig.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_activity_stream#resource_arn RdsClusterActivityStream#resource_arn}.

---

##### `engineNativeAuditFieldsIncluded`<sup>Optional</sup> <a name="engineNativeAuditFieldsIncluded" id="@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStreamConfig.property.engineNativeAuditFieldsIncluded"></a>

```typescript
public readonly engineNativeAuditFieldsIncluded: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_activity_stream#engine_native_audit_fields_included RdsClusterActivityStream#engine_native_audit_fields_included}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.rdsClusterActivityStream.RdsClusterActivityStreamConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_activity_stream#id RdsClusterActivityStream#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



