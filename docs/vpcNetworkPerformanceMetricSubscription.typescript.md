# `vpcNetworkPerformanceMetricSubscription` Submodule <a name="`vpcNetworkPerformanceMetricSubscription` Submodule" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcNetworkPerformanceMetricSubscription <a name="VpcNetworkPerformanceMetricSubscription" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_network_performance_metric_subscription aws_vpc_network_performance_metric_subscription}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.Initializer"></a>

```typescript
import { vpcNetworkPerformanceMetricSubscription } from '@cdktf/provider-aws'

new vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription(scope: Construct, id: string, config: VpcNetworkPerformanceMetricSubscriptionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig">VpcNetworkPerformanceMetricSubscriptionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig">VpcNetworkPerformanceMetricSubscriptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.resetMetric">resetMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.resetStatistic">resetStatistic</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMetric` <a name="resetMetric" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.resetMetric"></a>

```typescript
public resetMetric(): void
```

##### `resetStatistic` <a name="resetStatistic" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.resetStatistic"></a>

```typescript
public resetStatistic(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.isConstruct"></a>

```typescript
import { vpcNetworkPerformanceMetricSubscription } from '@cdktf/provider-aws'

vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.isTerraformElement"></a>

```typescript
import { vpcNetworkPerformanceMetricSubscription } from '@cdktf/provider-aws'

vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.isTerraformResource"></a>

```typescript
import { vpcNetworkPerformanceMetricSubscription } from '@cdktf/provider-aws'

vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.period">period</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.destinationInput">destinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.metricInput">metricInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.statisticInput">statisticInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.destination">destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.metric">metric</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.statistic">statistic</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.period"></a>

```typescript
public readonly period: string;
```

- *Type:* string

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.destinationInput"></a>

```typescript
public readonly destinationInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `metricInput`<sup>Optional</sup> <a name="metricInput" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.metricInput"></a>

```typescript
public readonly metricInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `statisticInput`<sup>Optional</sup> <a name="statisticInput" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.statisticInput"></a>

```typescript
public readonly statisticInput: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.metric"></a>

```typescript
public readonly metric: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.statistic"></a>

```typescript
public readonly statistic: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VpcNetworkPerformanceMetricSubscriptionConfig <a name="VpcNetworkPerformanceMetricSubscriptionConfig" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig.Initializer"></a>

```typescript
import { vpcNetworkPerformanceMetricSubscription } from '@cdktf/provider-aws'

const vpcNetworkPerformanceMetricSubscriptionConfig: vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig.property.destination">destination</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_network_performance_metric_subscription#destination VpcNetworkPerformanceMetricSubscription#destination}. |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig.property.source">source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_network_performance_metric_subscription#source VpcNetworkPerformanceMetricSubscription#source}. |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_network_performance_metric_subscription#id VpcNetworkPerformanceMetricSubscription#id}. |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig.property.metric">metric</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_network_performance_metric_subscription#metric VpcNetworkPerformanceMetricSubscription#metric}. |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig.property.statistic">statistic</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_network_performance_metric_subscription#statistic VpcNetworkPerformanceMetricSubscription#statistic}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_network_performance_metric_subscription#destination VpcNetworkPerformanceMetricSubscription#destination}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_network_performance_metric_subscription#source VpcNetworkPerformanceMetricSubscription#source}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_network_performance_metric_subscription#id VpcNetworkPerformanceMetricSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metric`<sup>Optional</sup> <a name="metric" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig.property.metric"></a>

```typescript
public readonly metric: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_network_performance_metric_subscription#metric VpcNetworkPerformanceMetricSubscription#metric}.

---

##### `statistic`<sup>Optional</sup> <a name="statistic" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig.property.statistic"></a>

```typescript
public readonly statistic: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_network_performance_metric_subscription#statistic VpcNetworkPerformanceMetricSubscription#statistic}.

---



