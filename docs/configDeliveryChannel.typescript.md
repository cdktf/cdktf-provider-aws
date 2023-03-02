# `configDeliveryChannel` Submodule <a name="`configDeliveryChannel` Submodule" id="@cdktf/provider-aws.configDeliveryChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigDeliveryChannel <a name="ConfigDeliveryChannel" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel aws_config_delivery_channel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.Initializer"></a>

```typescript
import { configDeliveryChannel } from '@cdktf/provider-aws'

new configDeliveryChannel.ConfigDeliveryChannel(scope: Construct, id: string, config: ConfigDeliveryChannelConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig">ConfigDeliveryChannelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig">ConfigDeliveryChannelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.putSnapshotDeliveryProperties">putSnapshotDeliveryProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.resetS3KeyPrefix">resetS3KeyPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.resetS3KmsKeyArn">resetS3KmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.resetSnapshotDeliveryProperties">resetSnapshotDeliveryProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.resetSnsTopicArn">resetSnsTopicArn</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putSnapshotDeliveryProperties` <a name="putSnapshotDeliveryProperties" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.putSnapshotDeliveryProperties"></a>

```typescript
public putSnapshotDeliveryProperties(value: ConfigDeliveryChannelSnapshotDeliveryProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.putSnapshotDeliveryProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryProperties">ConfigDeliveryChannelSnapshotDeliveryProperties</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.resetName"></a>

```typescript
public resetName(): void
```

##### `resetS3KeyPrefix` <a name="resetS3KeyPrefix" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.resetS3KeyPrefix"></a>

```typescript
public resetS3KeyPrefix(): void
```

##### `resetS3KmsKeyArn` <a name="resetS3KmsKeyArn" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.resetS3KmsKeyArn"></a>

```typescript
public resetS3KmsKeyArn(): void
```

##### `resetSnapshotDeliveryProperties` <a name="resetSnapshotDeliveryProperties" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.resetSnapshotDeliveryProperties"></a>

```typescript
public resetSnapshotDeliveryProperties(): void
```

##### `resetSnsTopicArn` <a name="resetSnsTopicArn" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.resetSnsTopicArn"></a>

```typescript
public resetSnsTopicArn(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.isConstruct"></a>

```typescript
import { configDeliveryChannel } from '@cdktf/provider-aws'

configDeliveryChannel.ConfigDeliveryChannel.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.isTerraformElement"></a>

```typescript
import { configDeliveryChannel } from '@cdktf/provider-aws'

configDeliveryChannel.ConfigDeliveryChannel.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.isTerraformResource"></a>

```typescript
import { configDeliveryChannel } from '@cdktf/provider-aws'

configDeliveryChannel.ConfigDeliveryChannel.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.snapshotDeliveryProperties">snapshotDeliveryProperties</a></code> | <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference">ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.s3BucketNameInput">s3BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.s3KeyPrefixInput">s3KeyPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.s3KmsKeyArnInput">s3KmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.snapshotDeliveryPropertiesInput">snapshotDeliveryPropertiesInput</a></code> | <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryProperties">ConfigDeliveryChannelSnapshotDeliveryProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.snsTopicArnInput">snsTopicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.s3BucketName">s3BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.s3KeyPrefix">s3KeyPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.s3KmsKeyArn">s3KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.snsTopicArn">snsTopicArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `snapshotDeliveryProperties`<sup>Required</sup> <a name="snapshotDeliveryProperties" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.snapshotDeliveryProperties"></a>

```typescript
public readonly snapshotDeliveryProperties: ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference">ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `s3BucketNameInput`<sup>Optional</sup> <a name="s3BucketNameInput" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.s3BucketNameInput"></a>

```typescript
public readonly s3BucketNameInput: string;
```

- *Type:* string

---

##### `s3KeyPrefixInput`<sup>Optional</sup> <a name="s3KeyPrefixInput" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.s3KeyPrefixInput"></a>

```typescript
public readonly s3KeyPrefixInput: string;
```

- *Type:* string

---

##### `s3KmsKeyArnInput`<sup>Optional</sup> <a name="s3KmsKeyArnInput" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.s3KmsKeyArnInput"></a>

```typescript
public readonly s3KmsKeyArnInput: string;
```

- *Type:* string

---

##### `snapshotDeliveryPropertiesInput`<sup>Optional</sup> <a name="snapshotDeliveryPropertiesInput" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.snapshotDeliveryPropertiesInput"></a>

```typescript
public readonly snapshotDeliveryPropertiesInput: ConfigDeliveryChannelSnapshotDeliveryProperties;
```

- *Type:* <a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryProperties">ConfigDeliveryChannelSnapshotDeliveryProperties</a>

---

##### `snsTopicArnInput`<sup>Optional</sup> <a name="snsTopicArnInput" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.snsTopicArnInput"></a>

```typescript
public readonly snsTopicArnInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `s3BucketName`<sup>Required</sup> <a name="s3BucketName" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.s3BucketName"></a>

```typescript
public readonly s3BucketName: string;
```

- *Type:* string

---

##### `s3KeyPrefix`<sup>Required</sup> <a name="s3KeyPrefix" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.s3KeyPrefix"></a>

```typescript
public readonly s3KeyPrefix: string;
```

- *Type:* string

---

##### `s3KmsKeyArn`<sup>Required</sup> <a name="s3KmsKeyArn" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.s3KmsKeyArn"></a>

```typescript
public readonly s3KmsKeyArn: string;
```

- *Type:* string

---

##### `snsTopicArn`<sup>Required</sup> <a name="snsTopicArn" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.snsTopicArn"></a>

```typescript
public readonly snsTopicArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigDeliveryChannelConfig <a name="ConfigDeliveryChannelConfig" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.Initializer"></a>

```typescript
import { configDeliveryChannel } from '@cdktf/provider-aws'

const configDeliveryChannelConfig: configDeliveryChannel.ConfigDeliveryChannelConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.s3BucketName">s3BucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#s3_bucket_name ConfigDeliveryChannel#s3_bucket_name}. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#id ConfigDeliveryChannel#id}. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#name ConfigDeliveryChannel#name}. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.s3KeyPrefix">s3KeyPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#s3_key_prefix ConfigDeliveryChannel#s3_key_prefix}. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.s3KmsKeyArn">s3KmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#s3_kms_key_arn ConfigDeliveryChannel#s3_kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.snapshotDeliveryProperties">snapshotDeliveryProperties</a></code> | <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryProperties">ConfigDeliveryChannelSnapshotDeliveryProperties</a></code> | snapshot_delivery_properties block. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.snsTopicArn">snsTopicArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#sns_topic_arn ConfigDeliveryChannel#sns_topic_arn}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `s3BucketName`<sup>Required</sup> <a name="s3BucketName" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.s3BucketName"></a>

```typescript
public readonly s3BucketName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#s3_bucket_name ConfigDeliveryChannel#s3_bucket_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#id ConfigDeliveryChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#name ConfigDeliveryChannel#name}.

---

##### `s3KeyPrefix`<sup>Optional</sup> <a name="s3KeyPrefix" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.s3KeyPrefix"></a>

```typescript
public readonly s3KeyPrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#s3_key_prefix ConfigDeliveryChannel#s3_key_prefix}.

---

##### `s3KmsKeyArn`<sup>Optional</sup> <a name="s3KmsKeyArn" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.s3KmsKeyArn"></a>

```typescript
public readonly s3KmsKeyArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#s3_kms_key_arn ConfigDeliveryChannel#s3_kms_key_arn}.

---

##### `snapshotDeliveryProperties`<sup>Optional</sup> <a name="snapshotDeliveryProperties" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.snapshotDeliveryProperties"></a>

```typescript
public readonly snapshotDeliveryProperties: ConfigDeliveryChannelSnapshotDeliveryProperties;
```

- *Type:* <a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryProperties">ConfigDeliveryChannelSnapshotDeliveryProperties</a>

snapshot_delivery_properties block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#snapshot_delivery_properties ConfigDeliveryChannel#snapshot_delivery_properties}

---

##### `snsTopicArn`<sup>Optional</sup> <a name="snsTopicArn" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.snsTopicArn"></a>

```typescript
public readonly snsTopicArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#sns_topic_arn ConfigDeliveryChannel#sns_topic_arn}.

---

### ConfigDeliveryChannelSnapshotDeliveryProperties <a name="ConfigDeliveryChannelSnapshotDeliveryProperties" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryProperties.Initializer"></a>

```typescript
import { configDeliveryChannel } from '@cdktf/provider-aws'

const configDeliveryChannelSnapshotDeliveryProperties: configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryProperties.property.deliveryFrequency">deliveryFrequency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#delivery_frequency ConfigDeliveryChannel#delivery_frequency}. |

---

##### `deliveryFrequency`<sup>Optional</sup> <a name="deliveryFrequency" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryProperties.property.deliveryFrequency"></a>

```typescript
public readonly deliveryFrequency: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#delivery_frequency ConfigDeliveryChannel#delivery_frequency}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference <a name="ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.Initializer"></a>

```typescript
import { configDeliveryChannel } from '@cdktf/provider-aws'

new configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.resetDeliveryFrequency">resetDeliveryFrequency</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeliveryFrequency` <a name="resetDeliveryFrequency" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.resetDeliveryFrequency"></a>

```typescript
public resetDeliveryFrequency(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.property.deliveryFrequencyInput">deliveryFrequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.property.deliveryFrequency">deliveryFrequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryProperties">ConfigDeliveryChannelSnapshotDeliveryProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deliveryFrequencyInput`<sup>Optional</sup> <a name="deliveryFrequencyInput" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.property.deliveryFrequencyInput"></a>

```typescript
public readonly deliveryFrequencyInput: string;
```

- *Type:* string

---

##### `deliveryFrequency`<sup>Required</sup> <a name="deliveryFrequency" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.property.deliveryFrequency"></a>

```typescript
public readonly deliveryFrequency: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ConfigDeliveryChannelSnapshotDeliveryProperties;
```

- *Type:* <a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryProperties">ConfigDeliveryChannelSnapshotDeliveryProperties</a>

---



