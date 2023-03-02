# `emrInstanceGroup` Submodule <a name="`emrInstanceGroup` Submodule" id="@cdktf/provider-aws.emrInstanceGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EmrInstanceGroup <a name="EmrInstanceGroup" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_group aws_emr_instance_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.Initializer"></a>

```typescript
import { emrInstanceGroup } from '@cdktf/provider-aws'

new emrInstanceGroup.EmrInstanceGroup(scope: Construct, id: string, config: EmrInstanceGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig">EmrInstanceGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig">EmrInstanceGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.putEbsConfig">putEbsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.resetAutoscalingPolicy">resetAutoscalingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.resetBidPrice">resetBidPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.resetConfigurationsJson">resetConfigurationsJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.resetEbsConfig">resetEbsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.resetEbsOptimized">resetEbsOptimized</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.resetInstanceCount">resetInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.resetName">resetName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putEbsConfig` <a name="putEbsConfig" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.putEbsConfig"></a>

```typescript
public putEbsConfig(value: IResolvable | EmrInstanceGroupEbsConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.putEbsConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfig">EmrInstanceGroupEbsConfig</a>[]

---

##### `resetAutoscalingPolicy` <a name="resetAutoscalingPolicy" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.resetAutoscalingPolicy"></a>

```typescript
public resetAutoscalingPolicy(): void
```

##### `resetBidPrice` <a name="resetBidPrice" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.resetBidPrice"></a>

```typescript
public resetBidPrice(): void
```

##### `resetConfigurationsJson` <a name="resetConfigurationsJson" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.resetConfigurationsJson"></a>

```typescript
public resetConfigurationsJson(): void
```

##### `resetEbsConfig` <a name="resetEbsConfig" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.resetEbsConfig"></a>

```typescript
public resetEbsConfig(): void
```

##### `resetEbsOptimized` <a name="resetEbsOptimized" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.resetEbsOptimized"></a>

```typescript
public resetEbsOptimized(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInstanceCount` <a name="resetInstanceCount" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.resetInstanceCount"></a>

```typescript
public resetInstanceCount(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.resetName"></a>

```typescript
public resetName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.isConstruct"></a>

```typescript
import { emrInstanceGroup } from '@cdktf/provider-aws'

emrInstanceGroup.EmrInstanceGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.isTerraformElement"></a>

```typescript
import { emrInstanceGroup } from '@cdktf/provider-aws'

emrInstanceGroup.EmrInstanceGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.isTerraformResource"></a>

```typescript
import { emrInstanceGroup } from '@cdktf/provider-aws'

emrInstanceGroup.EmrInstanceGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.ebsConfig">ebsConfig</a></code> | <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList">EmrInstanceGroupEbsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.runningInstanceCount">runningInstanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.autoscalingPolicyInput">autoscalingPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.bidPriceInput">bidPriceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.clusterIdInput">clusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.configurationsJsonInput">configurationsJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.ebsConfigInput">ebsConfigInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfig">EmrInstanceGroupEbsConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.ebsOptimizedInput">ebsOptimizedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.instanceCountInput">instanceCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.instanceTypeInput">instanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.autoscalingPolicy">autoscalingPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.bidPrice">bidPrice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.configurationsJson">configurationsJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.ebsOptimized">ebsOptimized</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.instanceCount">instanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `ebsConfig`<sup>Required</sup> <a name="ebsConfig" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.ebsConfig"></a>

```typescript
public readonly ebsConfig: EmrInstanceGroupEbsConfigList;
```

- *Type:* <a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList">EmrInstanceGroupEbsConfigList</a>

---

##### `runningInstanceCount`<sup>Required</sup> <a name="runningInstanceCount" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.runningInstanceCount"></a>

```typescript
public readonly runningInstanceCount: number;
```

- *Type:* number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `autoscalingPolicyInput`<sup>Optional</sup> <a name="autoscalingPolicyInput" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.autoscalingPolicyInput"></a>

```typescript
public readonly autoscalingPolicyInput: string;
```

- *Type:* string

---

##### `bidPriceInput`<sup>Optional</sup> <a name="bidPriceInput" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.bidPriceInput"></a>

```typescript
public readonly bidPriceInput: string;
```

- *Type:* string

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.clusterIdInput"></a>

```typescript
public readonly clusterIdInput: string;
```

- *Type:* string

---

##### `configurationsJsonInput`<sup>Optional</sup> <a name="configurationsJsonInput" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.configurationsJsonInput"></a>

```typescript
public readonly configurationsJsonInput: string;
```

- *Type:* string

---

##### `ebsConfigInput`<sup>Optional</sup> <a name="ebsConfigInput" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.ebsConfigInput"></a>

```typescript
public readonly ebsConfigInput: IResolvable | EmrInstanceGroupEbsConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfig">EmrInstanceGroupEbsConfig</a>[]

---

##### `ebsOptimizedInput`<sup>Optional</sup> <a name="ebsOptimizedInput" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.ebsOptimizedInput"></a>

```typescript
public readonly ebsOptimizedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceCountInput`<sup>Optional</sup> <a name="instanceCountInput" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.instanceCountInput"></a>

```typescript
public readonly instanceCountInput: number;
```

- *Type:* number

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.instanceTypeInput"></a>

```typescript
public readonly instanceTypeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `autoscalingPolicy`<sup>Required</sup> <a name="autoscalingPolicy" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.autoscalingPolicy"></a>

```typescript
public readonly autoscalingPolicy: string;
```

- *Type:* string

---

##### `bidPrice`<sup>Required</sup> <a name="bidPrice" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.bidPrice"></a>

```typescript
public readonly bidPrice: string;
```

- *Type:* string

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `configurationsJson`<sup>Required</sup> <a name="configurationsJson" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.configurationsJson"></a>

```typescript
public readonly configurationsJson: string;
```

- *Type:* string

---

##### `ebsOptimized`<sup>Required</sup> <a name="ebsOptimized" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.ebsOptimized"></a>

```typescript
public readonly ebsOptimized: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceCount`<sup>Required</sup> <a name="instanceCount" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.instanceCount"></a>

```typescript
public readonly instanceCount: number;
```

- *Type:* number

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EmrInstanceGroupConfig <a name="EmrInstanceGroupConfig" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.Initializer"></a>

```typescript
import { emrInstanceGroup } from '@cdktf/provider-aws'

const emrInstanceGroupConfig: emrInstanceGroup.EmrInstanceGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.clusterId">clusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_group#cluster_id EmrInstanceGroup#cluster_id}. |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.instanceType">instanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_group#instance_type EmrInstanceGroup#instance_type}. |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.autoscalingPolicy">autoscalingPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_group#autoscaling_policy EmrInstanceGroup#autoscaling_policy}. |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.bidPrice">bidPrice</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_group#bid_price EmrInstanceGroup#bid_price}. |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.configurationsJson">configurationsJson</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_group#configurations_json EmrInstanceGroup#configurations_json}. |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.ebsConfig">ebsConfig</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfig">EmrInstanceGroupEbsConfig</a>[]</code> | ebs_config block. |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.ebsOptimized">ebsOptimized</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_group#ebs_optimized EmrInstanceGroup#ebs_optimized}. |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_group#id EmrInstanceGroup#id}. |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.instanceCount">instanceCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_group#instance_count EmrInstanceGroup#instance_count}. |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_group#name EmrInstanceGroup#name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_group#cluster_id EmrInstanceGroup#cluster_id}.

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_group#instance_type EmrInstanceGroup#instance_type}.

---

##### `autoscalingPolicy`<sup>Optional</sup> <a name="autoscalingPolicy" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.autoscalingPolicy"></a>

```typescript
public readonly autoscalingPolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_group#autoscaling_policy EmrInstanceGroup#autoscaling_policy}.

---

##### `bidPrice`<sup>Optional</sup> <a name="bidPrice" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.bidPrice"></a>

```typescript
public readonly bidPrice: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_group#bid_price EmrInstanceGroup#bid_price}.

---

##### `configurationsJson`<sup>Optional</sup> <a name="configurationsJson" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.configurationsJson"></a>

```typescript
public readonly configurationsJson: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_group#configurations_json EmrInstanceGroup#configurations_json}.

---

##### `ebsConfig`<sup>Optional</sup> <a name="ebsConfig" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.ebsConfig"></a>

```typescript
public readonly ebsConfig: IResolvable | EmrInstanceGroupEbsConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfig">EmrInstanceGroupEbsConfig</a>[]

ebs_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_group#ebs_config EmrInstanceGroup#ebs_config}

---

##### `ebsOptimized`<sup>Optional</sup> <a name="ebsOptimized" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.ebsOptimized"></a>

```typescript
public readonly ebsOptimized: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_group#ebs_optimized EmrInstanceGroup#ebs_optimized}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_group#id EmrInstanceGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceCount`<sup>Optional</sup> <a name="instanceCount" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.instanceCount"></a>

```typescript
public readonly instanceCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_group#instance_count EmrInstanceGroup#instance_count}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_group#name EmrInstanceGroup#name}.

---

### EmrInstanceGroupEbsConfig <a name="EmrInstanceGroupEbsConfig" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfig.Initializer"></a>

```typescript
import { emrInstanceGroup } from '@cdktf/provider-aws'

const emrInstanceGroupEbsConfig: emrInstanceGroup.EmrInstanceGroupEbsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfig.property.size">size</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_group#size EmrInstanceGroup#size}. |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_group#type EmrInstanceGroup#type}. |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfig.property.iops">iops</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_group#iops EmrInstanceGroup#iops}. |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfig.property.volumesPerInstance">volumesPerInstance</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_group#volumes_per_instance EmrInstanceGroup#volumes_per_instance}. |

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfig.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_group#size EmrInstanceGroup#size}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_group#type EmrInstanceGroup#type}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfig.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_group#iops EmrInstanceGroup#iops}.

---

##### `volumesPerInstance`<sup>Optional</sup> <a name="volumesPerInstance" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfig.property.volumesPerInstance"></a>

```typescript
public readonly volumesPerInstance: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_group#volumes_per_instance EmrInstanceGroup#volumes_per_instance}.

---

## Classes <a name="Classes" id="Classes"></a>

### EmrInstanceGroupEbsConfigList <a name="EmrInstanceGroupEbsConfigList" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList.Initializer"></a>

```typescript
import { emrInstanceGroup } from '@cdktf/provider-aws'

new emrInstanceGroup.EmrInstanceGroupEbsConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList.get"></a>

```typescript
public get(index: number): EmrInstanceGroupEbsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfig">EmrInstanceGroupEbsConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EmrInstanceGroupEbsConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfig">EmrInstanceGroupEbsConfig</a>[]

---


### EmrInstanceGroupEbsConfigOutputReference <a name="EmrInstanceGroupEbsConfigOutputReference" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.Initializer"></a>

```typescript
import { emrInstanceGroup } from '@cdktf/provider-aws'

new emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.resetIops">resetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.resetVolumesPerInstance">resetVolumesPerInstance</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIops` <a name="resetIops" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.resetIops"></a>

```typescript
public resetIops(): void
```

##### `resetVolumesPerInstance` <a name="resetVolumesPerInstance" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.resetVolumesPerInstance"></a>

```typescript
public resetVolumesPerInstance(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.property.iopsInput">iopsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.property.sizeInput">sizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.property.volumesPerInstanceInput">volumesPerInstanceInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.property.iops">iops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.property.volumesPerInstance">volumesPerInstance</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfig">EmrInstanceGroupEbsConfig</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.property.iopsInput"></a>

```typescript
public readonly iopsInput: number;
```

- *Type:* number

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.property.sizeInput"></a>

```typescript
public readonly sizeInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `volumesPerInstanceInput`<sup>Optional</sup> <a name="volumesPerInstanceInput" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.property.volumesPerInstanceInput"></a>

```typescript
public readonly volumesPerInstanceInput: number;
```

- *Type:* number

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `volumesPerInstance`<sup>Required</sup> <a name="volumesPerInstance" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.property.volumesPerInstance"></a>

```typescript
public readonly volumesPerInstance: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EmrInstanceGroupEbsConfig | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfig">EmrInstanceGroupEbsConfig</a> | cdktf.IResolvable

---



