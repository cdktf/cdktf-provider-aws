# `dataAwsEc2InstanceType` Submodule <a name="`dataAwsEc2InstanceType` Submodule" id="@cdktf/provider-aws.dataAwsEc2InstanceType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEc2InstanceType <a name="DataAwsEc2InstanceType" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type aws_ec2_instance_type}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.Initializer"></a>

```typescript
import { dataAwsEc2InstanceType } from '@cdktf/provider-aws'

new dataAwsEc2InstanceType.DataAwsEc2InstanceType(scope: Construct, id: string, config: DataAwsEc2InstanceTypeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeConfig">DataAwsEc2InstanceTypeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeConfig">DataAwsEc2InstanceTypeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAwsEc2InstanceTypeTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeouts">DataAwsEc2InstanceTypeTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.isConstruct"></a>

```typescript
import { dataAwsEc2InstanceType } from '@cdktf/provider-aws'

dataAwsEc2InstanceType.DataAwsEc2InstanceType.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.isTerraformElement"></a>

```typescript
import { dataAwsEc2InstanceType } from '@cdktf/provider-aws'

dataAwsEc2InstanceType.DataAwsEc2InstanceType.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.isTerraformDataSource"></a>

```typescript
import { dataAwsEc2InstanceType } from '@cdktf/provider-aws'

dataAwsEc2InstanceType.DataAwsEc2InstanceType.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.autoRecoverySupported">autoRecoverySupported</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.bareMetal">bareMetal</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.burstablePerformanceSupported">burstablePerformanceSupported</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.currentGeneration">currentGeneration</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.dedicatedHostsSupported">dedicatedHostsSupported</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.defaultCores">defaultCores</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.defaultThreadsPerCore">defaultThreadsPerCore</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.defaultVcpus">defaultVcpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.ebsEncryptionSupport">ebsEncryptionSupport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.ebsNvmeSupport">ebsNvmeSupport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.ebsOptimizedSupport">ebsOptimizedSupport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.ebsPerformanceBaselineBandwidth">ebsPerformanceBaselineBandwidth</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.ebsPerformanceBaselineIops">ebsPerformanceBaselineIops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.ebsPerformanceBaselineThroughput">ebsPerformanceBaselineThroughput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.ebsPerformanceMaximumBandwidth">ebsPerformanceMaximumBandwidth</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.ebsPerformanceMaximumIops">ebsPerformanceMaximumIops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.ebsPerformanceMaximumThroughput">ebsPerformanceMaximumThroughput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.efaSupported">efaSupported</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.enaSupport">enaSupport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.encryptionInTransitSupported">encryptionInTransitSupported</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.fpgas">fpgas</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasList">DataAwsEc2InstanceTypeFpgasList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.freeTierEligible">freeTierEligible</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.gpus">gpus</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusList">DataAwsEc2InstanceTypeGpusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.hibernationSupported">hibernationSupported</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.hypervisor">hypervisor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.inferenceAccelerators">inferenceAccelerators</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsList">DataAwsEc2InstanceTypeInferenceAcceleratorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.instanceDisks">instanceDisks</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksList">DataAwsEc2InstanceTypeInstanceDisksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.instanceStorageSupported">instanceStorageSupported</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.ipv6Supported">ipv6Supported</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.maximumIpv4AddressesPerInterface">maximumIpv4AddressesPerInterface</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.maximumIpv6AddressesPerInterface">maximumIpv6AddressesPerInterface</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.maximumNetworkInterfaces">maximumNetworkInterfaces</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.memorySize">memorySize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.networkPerformance">networkPerformance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.supportedArchitectures">supportedArchitectures</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.supportedPlacementStrategies">supportedPlacementStrategies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.supportedRootDeviceTypes">supportedRootDeviceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.supportedUsagesClasses">supportedUsagesClasses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.supportedVirtualizationTypes">supportedVirtualizationTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.sustainedClockSpeed">sustainedClockSpeed</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference">DataAwsEc2InstanceTypeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.totalFpgaMemory">totalFpgaMemory</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.totalGpuMemory">totalGpuMemory</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.totalInstanceStorage">totalInstanceStorage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.validCores">validCores</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.validThreadsPerCore">validThreadsPerCore</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.instanceTypeInput">instanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeouts">DataAwsEc2InstanceTypeTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `autoRecoverySupported`<sup>Required</sup> <a name="autoRecoverySupported" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.autoRecoverySupported"></a>

```typescript
public readonly autoRecoverySupported: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `bareMetal`<sup>Required</sup> <a name="bareMetal" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.bareMetal"></a>

```typescript
public readonly bareMetal: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `burstablePerformanceSupported`<sup>Required</sup> <a name="burstablePerformanceSupported" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.burstablePerformanceSupported"></a>

```typescript
public readonly burstablePerformanceSupported: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `currentGeneration`<sup>Required</sup> <a name="currentGeneration" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.currentGeneration"></a>

```typescript
public readonly currentGeneration: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `dedicatedHostsSupported`<sup>Required</sup> <a name="dedicatedHostsSupported" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.dedicatedHostsSupported"></a>

```typescript
public readonly dedicatedHostsSupported: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `defaultCores`<sup>Required</sup> <a name="defaultCores" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.defaultCores"></a>

```typescript
public readonly defaultCores: number;
```

- *Type:* number

---

##### `defaultThreadsPerCore`<sup>Required</sup> <a name="defaultThreadsPerCore" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.defaultThreadsPerCore"></a>

```typescript
public readonly defaultThreadsPerCore: number;
```

- *Type:* number

---

##### `defaultVcpus`<sup>Required</sup> <a name="defaultVcpus" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.defaultVcpus"></a>

```typescript
public readonly defaultVcpus: number;
```

- *Type:* number

---

##### `ebsEncryptionSupport`<sup>Required</sup> <a name="ebsEncryptionSupport" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.ebsEncryptionSupport"></a>

```typescript
public readonly ebsEncryptionSupport: string;
```

- *Type:* string

---

##### `ebsNvmeSupport`<sup>Required</sup> <a name="ebsNvmeSupport" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.ebsNvmeSupport"></a>

```typescript
public readonly ebsNvmeSupport: string;
```

- *Type:* string

---

##### `ebsOptimizedSupport`<sup>Required</sup> <a name="ebsOptimizedSupport" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.ebsOptimizedSupport"></a>

```typescript
public readonly ebsOptimizedSupport: string;
```

- *Type:* string

---

##### `ebsPerformanceBaselineBandwidth`<sup>Required</sup> <a name="ebsPerformanceBaselineBandwidth" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.ebsPerformanceBaselineBandwidth"></a>

```typescript
public readonly ebsPerformanceBaselineBandwidth: number;
```

- *Type:* number

---

##### `ebsPerformanceBaselineIops`<sup>Required</sup> <a name="ebsPerformanceBaselineIops" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.ebsPerformanceBaselineIops"></a>

```typescript
public readonly ebsPerformanceBaselineIops: number;
```

- *Type:* number

---

##### `ebsPerformanceBaselineThroughput`<sup>Required</sup> <a name="ebsPerformanceBaselineThroughput" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.ebsPerformanceBaselineThroughput"></a>

```typescript
public readonly ebsPerformanceBaselineThroughput: number;
```

- *Type:* number

---

##### `ebsPerformanceMaximumBandwidth`<sup>Required</sup> <a name="ebsPerformanceMaximumBandwidth" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.ebsPerformanceMaximumBandwidth"></a>

```typescript
public readonly ebsPerformanceMaximumBandwidth: number;
```

- *Type:* number

---

##### `ebsPerformanceMaximumIops`<sup>Required</sup> <a name="ebsPerformanceMaximumIops" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.ebsPerformanceMaximumIops"></a>

```typescript
public readonly ebsPerformanceMaximumIops: number;
```

- *Type:* number

---

##### `ebsPerformanceMaximumThroughput`<sup>Required</sup> <a name="ebsPerformanceMaximumThroughput" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.ebsPerformanceMaximumThroughput"></a>

```typescript
public readonly ebsPerformanceMaximumThroughput: number;
```

- *Type:* number

---

##### `efaSupported`<sup>Required</sup> <a name="efaSupported" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.efaSupported"></a>

```typescript
public readonly efaSupported: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `enaSupport`<sup>Required</sup> <a name="enaSupport" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.enaSupport"></a>

```typescript
public readonly enaSupport: string;
```

- *Type:* string

---

##### `encryptionInTransitSupported`<sup>Required</sup> <a name="encryptionInTransitSupported" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.encryptionInTransitSupported"></a>

```typescript
public readonly encryptionInTransitSupported: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `fpgas`<sup>Required</sup> <a name="fpgas" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.fpgas"></a>

```typescript
public readonly fpgas: DataAwsEc2InstanceTypeFpgasList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasList">DataAwsEc2InstanceTypeFpgasList</a>

---

##### `freeTierEligible`<sup>Required</sup> <a name="freeTierEligible" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.freeTierEligible"></a>

```typescript
public readonly freeTierEligible: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `gpus`<sup>Required</sup> <a name="gpus" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.gpus"></a>

```typescript
public readonly gpus: DataAwsEc2InstanceTypeGpusList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusList">DataAwsEc2InstanceTypeGpusList</a>

---

##### `hibernationSupported`<sup>Required</sup> <a name="hibernationSupported" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.hibernationSupported"></a>

```typescript
public readonly hibernationSupported: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `hypervisor`<sup>Required</sup> <a name="hypervisor" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.hypervisor"></a>

```typescript
public readonly hypervisor: string;
```

- *Type:* string

---

##### `inferenceAccelerators`<sup>Required</sup> <a name="inferenceAccelerators" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.inferenceAccelerators"></a>

```typescript
public readonly inferenceAccelerators: DataAwsEc2InstanceTypeInferenceAcceleratorsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsList">DataAwsEc2InstanceTypeInferenceAcceleratorsList</a>

---

##### `instanceDisks`<sup>Required</sup> <a name="instanceDisks" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.instanceDisks"></a>

```typescript
public readonly instanceDisks: DataAwsEc2InstanceTypeInstanceDisksList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksList">DataAwsEc2InstanceTypeInstanceDisksList</a>

---

##### `instanceStorageSupported`<sup>Required</sup> <a name="instanceStorageSupported" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.instanceStorageSupported"></a>

```typescript
public readonly instanceStorageSupported: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `ipv6Supported`<sup>Required</sup> <a name="ipv6Supported" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.ipv6Supported"></a>

```typescript
public readonly ipv6Supported: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `maximumIpv4AddressesPerInterface`<sup>Required</sup> <a name="maximumIpv4AddressesPerInterface" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.maximumIpv4AddressesPerInterface"></a>

```typescript
public readonly maximumIpv4AddressesPerInterface: number;
```

- *Type:* number

---

##### `maximumIpv6AddressesPerInterface`<sup>Required</sup> <a name="maximumIpv6AddressesPerInterface" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.maximumIpv6AddressesPerInterface"></a>

```typescript
public readonly maximumIpv6AddressesPerInterface: number;
```

- *Type:* number

---

##### `maximumNetworkInterfaces`<sup>Required</sup> <a name="maximumNetworkInterfaces" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.maximumNetworkInterfaces"></a>

```typescript
public readonly maximumNetworkInterfaces: number;
```

- *Type:* number

---

##### `memorySize`<sup>Required</sup> <a name="memorySize" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.memorySize"></a>

```typescript
public readonly memorySize: number;
```

- *Type:* number

---

##### `networkPerformance`<sup>Required</sup> <a name="networkPerformance" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.networkPerformance"></a>

```typescript
public readonly networkPerformance: string;
```

- *Type:* string

---

##### `supportedArchitectures`<sup>Required</sup> <a name="supportedArchitectures" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.supportedArchitectures"></a>

```typescript
public readonly supportedArchitectures: string[];
```

- *Type:* string[]

---

##### `supportedPlacementStrategies`<sup>Required</sup> <a name="supportedPlacementStrategies" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.supportedPlacementStrategies"></a>

```typescript
public readonly supportedPlacementStrategies: string[];
```

- *Type:* string[]

---

##### `supportedRootDeviceTypes`<sup>Required</sup> <a name="supportedRootDeviceTypes" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.supportedRootDeviceTypes"></a>

```typescript
public readonly supportedRootDeviceTypes: string[];
```

- *Type:* string[]

---

##### `supportedUsagesClasses`<sup>Required</sup> <a name="supportedUsagesClasses" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.supportedUsagesClasses"></a>

```typescript
public readonly supportedUsagesClasses: string[];
```

- *Type:* string[]

---

##### `supportedVirtualizationTypes`<sup>Required</sup> <a name="supportedVirtualizationTypes" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.supportedVirtualizationTypes"></a>

```typescript
public readonly supportedVirtualizationTypes: string[];
```

- *Type:* string[]

---

##### `sustainedClockSpeed`<sup>Required</sup> <a name="sustainedClockSpeed" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.sustainedClockSpeed"></a>

```typescript
public readonly sustainedClockSpeed: number;
```

- *Type:* number

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.timeouts"></a>

```typescript
public readonly timeouts: DataAwsEc2InstanceTypeTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference">DataAwsEc2InstanceTypeTimeoutsOutputReference</a>

---

##### `totalFpgaMemory`<sup>Required</sup> <a name="totalFpgaMemory" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.totalFpgaMemory"></a>

```typescript
public readonly totalFpgaMemory: number;
```

- *Type:* number

---

##### `totalGpuMemory`<sup>Required</sup> <a name="totalGpuMemory" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.totalGpuMemory"></a>

```typescript
public readonly totalGpuMemory: number;
```

- *Type:* number

---

##### `totalInstanceStorage`<sup>Required</sup> <a name="totalInstanceStorage" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.totalInstanceStorage"></a>

```typescript
public readonly totalInstanceStorage: number;
```

- *Type:* number

---

##### `validCores`<sup>Required</sup> <a name="validCores" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.validCores"></a>

```typescript
public readonly validCores: number[];
```

- *Type:* number[]

---

##### `validThreadsPerCore`<sup>Required</sup> <a name="validThreadsPerCore" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.validThreadsPerCore"></a>

```typescript
public readonly validThreadsPerCore: number[];
```

- *Type:* number[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.instanceTypeInput"></a>

```typescript
public readonly instanceTypeInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: DataAwsEc2InstanceTypeTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeouts">DataAwsEc2InstanceTypeTimeouts</a> | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEc2InstanceTypeConfig <a name="DataAwsEc2InstanceTypeConfig" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeConfig.Initializer"></a>

```typescript
import { dataAwsEc2InstanceType } from '@cdktf/provider-aws'

const dataAwsEc2InstanceTypeConfig: dataAwsEc2InstanceType.DataAwsEc2InstanceTypeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeConfig.property.instanceType">instanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type#instance_type DataAwsEc2InstanceType#instance_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type#id DataAwsEc2InstanceType#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeouts">DataAwsEc2InstanceTypeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeConfig.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type#instance_type DataAwsEc2InstanceType#instance_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type#id DataAwsEc2InstanceType#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAwsEc2InstanceTypeTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeouts">DataAwsEc2InstanceTypeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type#timeouts DataAwsEc2InstanceType#timeouts}

---

### DataAwsEc2InstanceTypeFpgas <a name="DataAwsEc2InstanceTypeFpgas" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgas"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgas.Initializer"></a>

```typescript
import { dataAwsEc2InstanceType } from '@cdktf/provider-aws'

const dataAwsEc2InstanceTypeFpgas: dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgas = { ... }
```


### DataAwsEc2InstanceTypeGpus <a name="DataAwsEc2InstanceTypeGpus" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpus.Initializer"></a>

```typescript
import { dataAwsEc2InstanceType } from '@cdktf/provider-aws'

const dataAwsEc2InstanceTypeGpus: dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpus = { ... }
```


### DataAwsEc2InstanceTypeInferenceAccelerators <a name="DataAwsEc2InstanceTypeInferenceAccelerators" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAccelerators"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAccelerators.Initializer"></a>

```typescript
import { dataAwsEc2InstanceType } from '@cdktf/provider-aws'

const dataAwsEc2InstanceTypeInferenceAccelerators: dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAccelerators = { ... }
```


### DataAwsEc2InstanceTypeInstanceDisks <a name="DataAwsEc2InstanceTypeInstanceDisks" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisks.Initializer"></a>

```typescript
import { dataAwsEc2InstanceType } from '@cdktf/provider-aws'

const dataAwsEc2InstanceTypeInstanceDisks: dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisks = { ... }
```


### DataAwsEc2InstanceTypeTimeouts <a name="DataAwsEc2InstanceTypeTimeouts" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeouts.Initializer"></a>

```typescript
import { dataAwsEc2InstanceType } from '@cdktf/provider-aws'

const dataAwsEc2InstanceTypeTimeouts: dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type#read DataAwsEc2InstanceType#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type#read DataAwsEc2InstanceType#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsEc2InstanceTypeFpgasList <a name="DataAwsEc2InstanceTypeFpgasList" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasList.Initializer"></a>

```typescript
import { dataAwsEc2InstanceType } from '@cdktf/provider-aws'

new dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasList.get"></a>

```typescript
public get(index: number): DataAwsEc2InstanceTypeFpgasOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsEc2InstanceTypeFpgasOutputReference <a name="DataAwsEc2InstanceTypeFpgasOutputReference" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.Initializer"></a>

```typescript
import { dataAwsEc2InstanceType } from '@cdktf/provider-aws'

new dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.property.manufacturer">manufacturer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.property.memorySize">memorySize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgas">DataAwsEc2InstanceTypeFpgas</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `manufacturer`<sup>Required</sup> <a name="manufacturer" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.property.manufacturer"></a>

```typescript
public readonly manufacturer: string;
```

- *Type:* string

---

##### `memorySize`<sup>Required</sup> <a name="memorySize" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.property.memorySize"></a>

```typescript
public readonly memorySize: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsEc2InstanceTypeFpgas;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgas">DataAwsEc2InstanceTypeFpgas</a>

---


### DataAwsEc2InstanceTypeGpusList <a name="DataAwsEc2InstanceTypeGpusList" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusList.Initializer"></a>

```typescript
import { dataAwsEc2InstanceType } from '@cdktf/provider-aws'

new dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusList.get"></a>

```typescript
public get(index: number): DataAwsEc2InstanceTypeGpusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsEc2InstanceTypeGpusOutputReference <a name="DataAwsEc2InstanceTypeGpusOutputReference" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.Initializer"></a>

```typescript
import { dataAwsEc2InstanceType } from '@cdktf/provider-aws'

new dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.property.manufacturer">manufacturer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.property.memorySize">memorySize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpus">DataAwsEc2InstanceTypeGpus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `manufacturer`<sup>Required</sup> <a name="manufacturer" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.property.manufacturer"></a>

```typescript
public readonly manufacturer: string;
```

- *Type:* string

---

##### `memorySize`<sup>Required</sup> <a name="memorySize" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.property.memorySize"></a>

```typescript
public readonly memorySize: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsEc2InstanceTypeGpus;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpus">DataAwsEc2InstanceTypeGpus</a>

---


### DataAwsEc2InstanceTypeInferenceAcceleratorsList <a name="DataAwsEc2InstanceTypeInferenceAcceleratorsList" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsList.Initializer"></a>

```typescript
import { dataAwsEc2InstanceType } from '@cdktf/provider-aws'

new dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsList.get"></a>

```typescript
public get(index: number): DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference <a name="DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.Initializer"></a>

```typescript
import { dataAwsEc2InstanceType } from '@cdktf/provider-aws'

new dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.property.manufacturer">manufacturer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAccelerators">DataAwsEc2InstanceTypeInferenceAccelerators</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `manufacturer`<sup>Required</sup> <a name="manufacturer" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.property.manufacturer"></a>

```typescript
public readonly manufacturer: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsEc2InstanceTypeInferenceAccelerators;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAccelerators">DataAwsEc2InstanceTypeInferenceAccelerators</a>

---


### DataAwsEc2InstanceTypeInstanceDisksList <a name="DataAwsEc2InstanceTypeInstanceDisksList" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksList.Initializer"></a>

```typescript
import { dataAwsEc2InstanceType } from '@cdktf/provider-aws'

new dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksList.get"></a>

```typescript
public get(index: number): DataAwsEc2InstanceTypeInstanceDisksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsEc2InstanceTypeInstanceDisksOutputReference <a name="DataAwsEc2InstanceTypeInstanceDisksOutputReference" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.Initializer"></a>

```typescript
import { dataAwsEc2InstanceType } from '@cdktf/provider-aws'

new dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisks">DataAwsEc2InstanceTypeInstanceDisks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsEc2InstanceTypeInstanceDisks;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisks">DataAwsEc2InstanceTypeInstanceDisks</a>

---


### DataAwsEc2InstanceTypeTimeoutsOutputReference <a name="DataAwsEc2InstanceTypeTimeoutsOutputReference" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAwsEc2InstanceType } from '@cdktf/provider-aws'

new dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeouts">DataAwsEc2InstanceTypeTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsEc2InstanceTypeTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeouts">DataAwsEc2InstanceTypeTimeouts</a> | cdktf.IResolvable

---



