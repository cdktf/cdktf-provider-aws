# `dataAwsAutoscalingGroup` Submodule <a name="`dataAwsAutoscalingGroup` Submodule" id="@cdktf/provider-aws.dataAwsAutoscalingGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsAutoscalingGroup <a name="DataAwsAutoscalingGroup" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/autoscaling_group aws_autoscaling_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.Initializer"></a>

```typescript
import { dataAwsAutoscalingGroup } from '@cdktf/provider-aws'

new dataAwsAutoscalingGroup.DataAwsAutoscalingGroup(scope: Construct, id: string, config: DataAwsAutoscalingGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupConfig">DataAwsAutoscalingGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupConfig">DataAwsAutoscalingGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.isConstruct"></a>

```typescript
import { dataAwsAutoscalingGroup } from '@cdktf/provider-aws'

dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.isTerraformElement"></a>

```typescript
import { dataAwsAutoscalingGroup } from '@cdktf/provider-aws'

dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.isTerraformDataSource"></a>

```typescript
import { dataAwsAutoscalingGroup } from '@cdktf/provider-aws'

dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.property.defaultCooldown">defaultCooldown</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.property.desiredCapacity">desiredCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.property.desiredCapacityType">desiredCapacityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.property.enabledMetrics">enabledMetrics</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.property.healthCheckGracePeriod">healthCheckGracePeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.property.healthCheckType">healthCheckType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.property.launchConfiguration">launchConfiguration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.property.launchTemplate">launchTemplate</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateList">DataAwsAutoscalingGroupLaunchTemplateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.property.loadBalancers">loadBalancers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.property.maxSize">maxSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.property.minSize">minSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.property.newInstancesProtectedFromScaleIn">newInstancesProtectedFromScaleIn</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.property.placementGroup">placementGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.property.serviceLinkedRoleArn">serviceLinkedRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.property.targetGroupArns">targetGroupArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.property.terminationPolicies">terminationPolicies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.property.vpcZoneIdentifier">vpcZoneIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

---

##### `defaultCooldown`<sup>Required</sup> <a name="defaultCooldown" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.property.defaultCooldown"></a>

```typescript
public readonly defaultCooldown: number;
```

- *Type:* number

---

##### `desiredCapacity`<sup>Required</sup> <a name="desiredCapacity" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.property.desiredCapacity"></a>

```typescript
public readonly desiredCapacity: number;
```

- *Type:* number

---

##### `desiredCapacityType`<sup>Required</sup> <a name="desiredCapacityType" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.property.desiredCapacityType"></a>

```typescript
public readonly desiredCapacityType: string;
```

- *Type:* string

---

##### `enabledMetrics`<sup>Required</sup> <a name="enabledMetrics" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.property.enabledMetrics"></a>

```typescript
public readonly enabledMetrics: string[];
```

- *Type:* string[]

---

##### `healthCheckGracePeriod`<sup>Required</sup> <a name="healthCheckGracePeriod" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.property.healthCheckGracePeriod"></a>

```typescript
public readonly healthCheckGracePeriod: number;
```

- *Type:* number

---

##### `healthCheckType`<sup>Required</sup> <a name="healthCheckType" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.property.healthCheckType"></a>

```typescript
public readonly healthCheckType: string;
```

- *Type:* string

---

##### `launchConfiguration`<sup>Required</sup> <a name="launchConfiguration" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.property.launchConfiguration"></a>

```typescript
public readonly launchConfiguration: string;
```

- *Type:* string

---

##### `launchTemplate`<sup>Required</sup> <a name="launchTemplate" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.property.launchTemplate"></a>

```typescript
public readonly launchTemplate: DataAwsAutoscalingGroupLaunchTemplateList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateList">DataAwsAutoscalingGroupLaunchTemplateList</a>

---

##### `loadBalancers`<sup>Required</sup> <a name="loadBalancers" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.property.loadBalancers"></a>

```typescript
public readonly loadBalancers: string[];
```

- *Type:* string[]

---

##### `maxSize`<sup>Required</sup> <a name="maxSize" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.property.maxSize"></a>

```typescript
public readonly maxSize: number;
```

- *Type:* number

---

##### `minSize`<sup>Required</sup> <a name="minSize" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.property.minSize"></a>

```typescript
public readonly minSize: number;
```

- *Type:* number

---

##### `newInstancesProtectedFromScaleIn`<sup>Required</sup> <a name="newInstancesProtectedFromScaleIn" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.property.newInstancesProtectedFromScaleIn"></a>

```typescript
public readonly newInstancesProtectedFromScaleIn: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `placementGroup`<sup>Required</sup> <a name="placementGroup" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.property.placementGroup"></a>

```typescript
public readonly placementGroup: string;
```

- *Type:* string

---

##### `serviceLinkedRoleArn`<sup>Required</sup> <a name="serviceLinkedRoleArn" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.property.serviceLinkedRoleArn"></a>

```typescript
public readonly serviceLinkedRoleArn: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `targetGroupArns`<sup>Required</sup> <a name="targetGroupArns" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.property.targetGroupArns"></a>

```typescript
public readonly targetGroupArns: string[];
```

- *Type:* string[]

---

##### `terminationPolicies`<sup>Required</sup> <a name="terminationPolicies" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.property.terminationPolicies"></a>

```typescript
public readonly terminationPolicies: string[];
```

- *Type:* string[]

---

##### `vpcZoneIdentifier`<sup>Required</sup> <a name="vpcZoneIdentifier" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.property.vpcZoneIdentifier"></a>

```typescript
public readonly vpcZoneIdentifier: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsAutoscalingGroupConfig <a name="DataAwsAutoscalingGroupConfig" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupConfig.Initializer"></a>

```typescript
import { dataAwsAutoscalingGroup } from '@cdktf/provider-aws'

const dataAwsAutoscalingGroupConfig: dataAwsAutoscalingGroup.DataAwsAutoscalingGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/autoscaling_group#name DataAwsAutoscalingGroup#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/autoscaling_group#id DataAwsAutoscalingGroup#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/autoscaling_group#name DataAwsAutoscalingGroup#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/autoscaling_group#id DataAwsAutoscalingGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsAutoscalingGroupLaunchTemplate <a name="DataAwsAutoscalingGroupLaunchTemplate" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplate.Initializer"></a>

```typescript
import { dataAwsAutoscalingGroup } from '@cdktf/provider-aws'

const dataAwsAutoscalingGroupLaunchTemplate: dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplate = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsAutoscalingGroupLaunchTemplateList <a name="DataAwsAutoscalingGroupLaunchTemplateList" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateList.Initializer"></a>

```typescript
import { dataAwsAutoscalingGroup } from '@cdktf/provider-aws'

new dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateList.get"></a>

```typescript
public get(index: number): DataAwsAutoscalingGroupLaunchTemplateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsAutoscalingGroupLaunchTemplateOutputReference <a name="DataAwsAutoscalingGroupLaunchTemplateOutputReference" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateOutputReference.Initializer"></a>

```typescript
import { dataAwsAutoscalingGroup } from '@cdktf/provider-aws'

new dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplate">DataAwsAutoscalingGroupLaunchTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsAutoscalingGroupLaunchTemplate;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAutoscalingGroup.DataAwsAutoscalingGroupLaunchTemplate">DataAwsAutoscalingGroupLaunchTemplate</a>

---



