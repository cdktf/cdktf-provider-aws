# `dataAwsMskBootstrapBrokers` Submodule <a name="`dataAwsMskBootstrapBrokers` Submodule" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsMskBootstrapBrokers <a name="DataAwsMskBootstrapBrokers" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/msk_bootstrap_brokers aws_msk_bootstrap_brokers}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.Initializer"></a>

```typescript
import { dataAwsMskBootstrapBrokers } from '@cdktf/provider-aws'

new dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers(scope: Construct, id: string, config: DataAwsMskBootstrapBrokersConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig">DataAwsMskBootstrapBrokersConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig">DataAwsMskBootstrapBrokersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsMskBootstrapBrokers resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.isConstruct"></a>

```typescript
import { dataAwsMskBootstrapBrokers } from '@cdktf/provider-aws'

dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.isTerraformElement"></a>

```typescript
import { dataAwsMskBootstrapBrokers } from '@cdktf/provider-aws'

dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.isTerraformDataSource"></a>

```typescript
import { dataAwsMskBootstrapBrokers } from '@cdktf/provider-aws'

dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.generateConfigForImport"></a>

```typescript
import { dataAwsMskBootstrapBrokers } from '@cdktf/provider-aws'

dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsMskBootstrapBrokers resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsMskBootstrapBrokers to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsMskBootstrapBrokers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/msk_bootstrap_brokers#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsMskBootstrapBrokers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.bootstrapBrokers">bootstrapBrokers</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.bootstrapBrokersPublicSaslIam">bootstrapBrokersPublicSaslIam</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.bootstrapBrokersPublicSaslScram">bootstrapBrokersPublicSaslScram</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.bootstrapBrokersPublicTls">bootstrapBrokersPublicTls</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.bootstrapBrokersSaslIam">bootstrapBrokersSaslIam</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.bootstrapBrokersSaslScram">bootstrapBrokersSaslScram</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.bootstrapBrokersTls">bootstrapBrokersTls</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.bootstrapBrokersVpcConnectivitySaslIam">bootstrapBrokersVpcConnectivitySaslIam</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.bootstrapBrokersVpcConnectivitySaslScram">bootstrapBrokersVpcConnectivitySaslScram</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.bootstrapBrokersVpcConnectivityTls">bootstrapBrokersVpcConnectivityTls</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.clusterArnInput">clusterArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.clusterArn">clusterArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `bootstrapBrokers`<sup>Required</sup> <a name="bootstrapBrokers" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.bootstrapBrokers"></a>

```typescript
public readonly bootstrapBrokers: string;
```

- *Type:* string

---

##### `bootstrapBrokersPublicSaslIam`<sup>Required</sup> <a name="bootstrapBrokersPublicSaslIam" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.bootstrapBrokersPublicSaslIam"></a>

```typescript
public readonly bootstrapBrokersPublicSaslIam: string;
```

- *Type:* string

---

##### `bootstrapBrokersPublicSaslScram`<sup>Required</sup> <a name="bootstrapBrokersPublicSaslScram" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.bootstrapBrokersPublicSaslScram"></a>

```typescript
public readonly bootstrapBrokersPublicSaslScram: string;
```

- *Type:* string

---

##### `bootstrapBrokersPublicTls`<sup>Required</sup> <a name="bootstrapBrokersPublicTls" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.bootstrapBrokersPublicTls"></a>

```typescript
public readonly bootstrapBrokersPublicTls: string;
```

- *Type:* string

---

##### `bootstrapBrokersSaslIam`<sup>Required</sup> <a name="bootstrapBrokersSaslIam" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.bootstrapBrokersSaslIam"></a>

```typescript
public readonly bootstrapBrokersSaslIam: string;
```

- *Type:* string

---

##### `bootstrapBrokersSaslScram`<sup>Required</sup> <a name="bootstrapBrokersSaslScram" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.bootstrapBrokersSaslScram"></a>

```typescript
public readonly bootstrapBrokersSaslScram: string;
```

- *Type:* string

---

##### `bootstrapBrokersTls`<sup>Required</sup> <a name="bootstrapBrokersTls" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.bootstrapBrokersTls"></a>

```typescript
public readonly bootstrapBrokersTls: string;
```

- *Type:* string

---

##### `bootstrapBrokersVpcConnectivitySaslIam`<sup>Required</sup> <a name="bootstrapBrokersVpcConnectivitySaslIam" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.bootstrapBrokersVpcConnectivitySaslIam"></a>

```typescript
public readonly bootstrapBrokersVpcConnectivitySaslIam: string;
```

- *Type:* string

---

##### `bootstrapBrokersVpcConnectivitySaslScram`<sup>Required</sup> <a name="bootstrapBrokersVpcConnectivitySaslScram" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.bootstrapBrokersVpcConnectivitySaslScram"></a>

```typescript
public readonly bootstrapBrokersVpcConnectivitySaslScram: string;
```

- *Type:* string

---

##### `bootstrapBrokersVpcConnectivityTls`<sup>Required</sup> <a name="bootstrapBrokersVpcConnectivityTls" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.bootstrapBrokersVpcConnectivityTls"></a>

```typescript
public readonly bootstrapBrokersVpcConnectivityTls: string;
```

- *Type:* string

---

##### `clusterArnInput`<sup>Optional</sup> <a name="clusterArnInput" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.clusterArnInput"></a>

```typescript
public readonly clusterArnInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `clusterArn`<sup>Required</sup> <a name="clusterArn" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.clusterArn"></a>

```typescript
public readonly clusterArn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsMskBootstrapBrokersConfig <a name="DataAwsMskBootstrapBrokersConfig" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig.Initializer"></a>

```typescript
import { dataAwsMskBootstrapBrokers } from '@cdktf/provider-aws'

const dataAwsMskBootstrapBrokersConfig: dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig.property.clusterArn">clusterArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/msk_bootstrap_brokers#cluster_arn DataAwsMskBootstrapBrokers#cluster_arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/msk_bootstrap_brokers#id DataAwsMskBootstrapBrokers#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterArn`<sup>Required</sup> <a name="clusterArn" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig.property.clusterArn"></a>

```typescript
public readonly clusterArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/msk_bootstrap_brokers#cluster_arn DataAwsMskBootstrapBrokers#cluster_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/msk_bootstrap_brokers#id DataAwsMskBootstrapBrokers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/msk_bootstrap_brokers#region DataAwsMskBootstrapBrokers#region}

---



