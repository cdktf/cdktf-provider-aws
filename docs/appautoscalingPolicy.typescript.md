# `appautoscalingPolicy` Submodule <a name="`appautoscalingPolicy` Submodule" id="@cdktf/provider-aws.appautoscalingPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppautoscalingPolicy <a name="AppautoscalingPolicy" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy aws_appautoscaling_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.Initializer"></a>

```typescript
import { appautoscalingPolicy } from '@cdktf/provider-aws'

new appautoscalingPolicy.AppautoscalingPolicy(scope: Construct, id: string, config: AppautoscalingPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig">AppautoscalingPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig">AppautoscalingPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.putStepScalingPolicyConfiguration">putStepScalingPolicyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.putTargetTrackingScalingPolicyConfiguration">putTargetTrackingScalingPolicyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.resetPolicyType">resetPolicyType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.resetStepScalingPolicyConfiguration">resetStepScalingPolicyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.resetTargetTrackingScalingPolicyConfiguration">resetTargetTrackingScalingPolicyConfiguration</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putStepScalingPolicyConfiguration` <a name="putStepScalingPolicyConfiguration" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.putStepScalingPolicyConfiguration"></a>

```typescript
public putStepScalingPolicyConfiguration(value: AppautoscalingPolicyStepScalingPolicyConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.putStepScalingPolicyConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfiguration">AppautoscalingPolicyStepScalingPolicyConfiguration</a>

---

##### `putTargetTrackingScalingPolicyConfiguration` <a name="putTargetTrackingScalingPolicyConfiguration" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.putTargetTrackingScalingPolicyConfiguration"></a>

```typescript
public putTargetTrackingScalingPolicyConfiguration(value: AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.putTargetTrackingScalingPolicyConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration">AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPolicyType` <a name="resetPolicyType" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.resetPolicyType"></a>

```typescript
public resetPolicyType(): void
```

##### `resetStepScalingPolicyConfiguration` <a name="resetStepScalingPolicyConfiguration" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.resetStepScalingPolicyConfiguration"></a>

```typescript
public resetStepScalingPolicyConfiguration(): void
```

##### `resetTargetTrackingScalingPolicyConfiguration` <a name="resetTargetTrackingScalingPolicyConfiguration" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.resetTargetTrackingScalingPolicyConfiguration"></a>

```typescript
public resetTargetTrackingScalingPolicyConfiguration(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.isConstruct"></a>

```typescript
import { appautoscalingPolicy } from '@cdktf/provider-aws'

appautoscalingPolicy.AppautoscalingPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.isTerraformElement"></a>

```typescript
import { appautoscalingPolicy } from '@cdktf/provider-aws'

appautoscalingPolicy.AppautoscalingPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.isTerraformResource"></a>

```typescript
import { appautoscalingPolicy } from '@cdktf/provider-aws'

appautoscalingPolicy.AppautoscalingPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.alarmArns">alarmArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.stepScalingPolicyConfiguration">stepScalingPolicyConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference">AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.targetTrackingScalingPolicyConfiguration">targetTrackingScalingPolicyConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.policyTypeInput">policyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.resourceIdInput">resourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.scalableDimensionInput">scalableDimensionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.serviceNamespaceInput">serviceNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.stepScalingPolicyConfigurationInput">stepScalingPolicyConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfiguration">AppautoscalingPolicyStepScalingPolicyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.targetTrackingScalingPolicyConfigurationInput">targetTrackingScalingPolicyConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration">AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.policyType">policyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.scalableDimension">scalableDimension</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.serviceNamespace">serviceNamespace</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `alarmArns`<sup>Required</sup> <a name="alarmArns" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.alarmArns"></a>

```typescript
public readonly alarmArns: string[];
```

- *Type:* string[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `stepScalingPolicyConfiguration`<sup>Required</sup> <a name="stepScalingPolicyConfiguration" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.stepScalingPolicyConfiguration"></a>

```typescript
public readonly stepScalingPolicyConfiguration: AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference">AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference</a>

---

##### `targetTrackingScalingPolicyConfiguration`<sup>Required</sup> <a name="targetTrackingScalingPolicyConfiguration" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.targetTrackingScalingPolicyConfiguration"></a>

```typescript
public readonly targetTrackingScalingPolicyConfiguration: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `policyTypeInput`<sup>Optional</sup> <a name="policyTypeInput" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.policyTypeInput"></a>

```typescript
public readonly policyTypeInput: string;
```

- *Type:* string

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.resourceIdInput"></a>

```typescript
public readonly resourceIdInput: string;
```

- *Type:* string

---

##### `scalableDimensionInput`<sup>Optional</sup> <a name="scalableDimensionInput" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.scalableDimensionInput"></a>

```typescript
public readonly scalableDimensionInput: string;
```

- *Type:* string

---

##### `serviceNamespaceInput`<sup>Optional</sup> <a name="serviceNamespaceInput" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.serviceNamespaceInput"></a>

```typescript
public readonly serviceNamespaceInput: string;
```

- *Type:* string

---

##### `stepScalingPolicyConfigurationInput`<sup>Optional</sup> <a name="stepScalingPolicyConfigurationInput" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.stepScalingPolicyConfigurationInput"></a>

```typescript
public readonly stepScalingPolicyConfigurationInput: AppautoscalingPolicyStepScalingPolicyConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfiguration">AppautoscalingPolicyStepScalingPolicyConfiguration</a>

---

##### `targetTrackingScalingPolicyConfigurationInput`<sup>Optional</sup> <a name="targetTrackingScalingPolicyConfigurationInput" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.targetTrackingScalingPolicyConfigurationInput"></a>

```typescript
public readonly targetTrackingScalingPolicyConfigurationInput: AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration">AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.policyType"></a>

```typescript
public readonly policyType: string;
```

- *Type:* string

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `scalableDimension`<sup>Required</sup> <a name="scalableDimension" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.scalableDimension"></a>

```typescript
public readonly scalableDimension: string;
```

- *Type:* string

---

##### `serviceNamespace`<sup>Required</sup> <a name="serviceNamespace" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.serviceNamespace"></a>

```typescript
public readonly serviceNamespace: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppautoscalingPolicyConfig <a name="AppautoscalingPolicyConfig" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.Initializer"></a>

```typescript
import { appautoscalingPolicy } from '@cdktf/provider-aws'

const appautoscalingPolicyConfig: appautoscalingPolicy.AppautoscalingPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#name AppautoscalingPolicy#name}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.resourceId">resourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#resource_id AppautoscalingPolicy#resource_id}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.scalableDimension">scalableDimension</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#scalable_dimension AppautoscalingPolicy#scalable_dimension}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.serviceNamespace">serviceNamespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#service_namespace AppautoscalingPolicy#service_namespace}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#id AppautoscalingPolicy#id}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.policyType">policyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#policy_type AppautoscalingPolicy#policy_type}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.stepScalingPolicyConfiguration">stepScalingPolicyConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfiguration">AppautoscalingPolicyStepScalingPolicyConfiguration</a></code> | step_scaling_policy_configuration block. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.targetTrackingScalingPolicyConfiguration">targetTrackingScalingPolicyConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration">AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration</a></code> | target_tracking_scaling_policy_configuration block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#name AppautoscalingPolicy#name}.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#resource_id AppautoscalingPolicy#resource_id}.

---

##### `scalableDimension`<sup>Required</sup> <a name="scalableDimension" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.scalableDimension"></a>

```typescript
public readonly scalableDimension: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#scalable_dimension AppautoscalingPolicy#scalable_dimension}.

---

##### `serviceNamespace`<sup>Required</sup> <a name="serviceNamespace" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.serviceNamespace"></a>

```typescript
public readonly serviceNamespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#service_namespace AppautoscalingPolicy#service_namespace}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#id AppautoscalingPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policyType`<sup>Optional</sup> <a name="policyType" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.policyType"></a>

```typescript
public readonly policyType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#policy_type AppautoscalingPolicy#policy_type}.

---

##### `stepScalingPolicyConfiguration`<sup>Optional</sup> <a name="stepScalingPolicyConfiguration" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.stepScalingPolicyConfiguration"></a>

```typescript
public readonly stepScalingPolicyConfiguration: AppautoscalingPolicyStepScalingPolicyConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfiguration">AppautoscalingPolicyStepScalingPolicyConfiguration</a>

step_scaling_policy_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#step_scaling_policy_configuration AppautoscalingPolicy#step_scaling_policy_configuration}

---

##### `targetTrackingScalingPolicyConfiguration`<sup>Optional</sup> <a name="targetTrackingScalingPolicyConfiguration" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.targetTrackingScalingPolicyConfiguration"></a>

```typescript
public readonly targetTrackingScalingPolicyConfiguration: AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration">AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration</a>

target_tracking_scaling_policy_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#target_tracking_scaling_policy_configuration AppautoscalingPolicy#target_tracking_scaling_policy_configuration}

---

### AppautoscalingPolicyStepScalingPolicyConfiguration <a name="AppautoscalingPolicyStepScalingPolicyConfiguration" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfiguration.Initializer"></a>

```typescript
import { appautoscalingPolicy } from '@cdktf/provider-aws'

const appautoscalingPolicyStepScalingPolicyConfiguration: appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfiguration.property.adjustmentType">adjustmentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#adjustment_type AppautoscalingPolicy#adjustment_type}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfiguration.property.cooldown">cooldown</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#cooldown AppautoscalingPolicy#cooldown}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfiguration.property.metricAggregationType">metricAggregationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#metric_aggregation_type AppautoscalingPolicy#metric_aggregation_type}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfiguration.property.minAdjustmentMagnitude">minAdjustmentMagnitude</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#min_adjustment_magnitude AppautoscalingPolicy#min_adjustment_magnitude}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfiguration.property.stepAdjustment">stepAdjustment</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment">AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment</a>[]</code> | step_adjustment block. |

---

##### `adjustmentType`<sup>Optional</sup> <a name="adjustmentType" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfiguration.property.adjustmentType"></a>

```typescript
public readonly adjustmentType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#adjustment_type AppautoscalingPolicy#adjustment_type}.

---

##### `cooldown`<sup>Optional</sup> <a name="cooldown" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfiguration.property.cooldown"></a>

```typescript
public readonly cooldown: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#cooldown AppautoscalingPolicy#cooldown}.

---

##### `metricAggregationType`<sup>Optional</sup> <a name="metricAggregationType" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfiguration.property.metricAggregationType"></a>

```typescript
public readonly metricAggregationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#metric_aggregation_type AppautoscalingPolicy#metric_aggregation_type}.

---

##### `minAdjustmentMagnitude`<sup>Optional</sup> <a name="minAdjustmentMagnitude" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfiguration.property.minAdjustmentMagnitude"></a>

```typescript
public readonly minAdjustmentMagnitude: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#min_adjustment_magnitude AppautoscalingPolicy#min_adjustment_magnitude}.

---

##### `stepAdjustment`<sup>Optional</sup> <a name="stepAdjustment" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfiguration.property.stepAdjustment"></a>

```typescript
public readonly stepAdjustment: IResolvable | AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment">AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment</a>[]

step_adjustment block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#step_adjustment AppautoscalingPolicy#step_adjustment}

---

### AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment <a name="AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment.Initializer"></a>

```typescript
import { appautoscalingPolicy } from '@cdktf/provider-aws'

const appautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment: appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment.property.scalingAdjustment">scalingAdjustment</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#scaling_adjustment AppautoscalingPolicy#scaling_adjustment}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment.property.metricIntervalLowerBound">metricIntervalLowerBound</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#metric_interval_lower_bound AppautoscalingPolicy#metric_interval_lower_bound}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment.property.metricIntervalUpperBound">metricIntervalUpperBound</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#metric_interval_upper_bound AppautoscalingPolicy#metric_interval_upper_bound}. |

---

##### `scalingAdjustment`<sup>Required</sup> <a name="scalingAdjustment" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment.property.scalingAdjustment"></a>

```typescript
public readonly scalingAdjustment: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#scaling_adjustment AppautoscalingPolicy#scaling_adjustment}.

---

##### `metricIntervalLowerBound`<sup>Optional</sup> <a name="metricIntervalLowerBound" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment.property.metricIntervalLowerBound"></a>

```typescript
public readonly metricIntervalLowerBound: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#metric_interval_lower_bound AppautoscalingPolicy#metric_interval_lower_bound}.

---

##### `metricIntervalUpperBound`<sup>Optional</sup> <a name="metricIntervalUpperBound" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment.property.metricIntervalUpperBound"></a>

```typescript
public readonly metricIntervalUpperBound: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#metric_interval_upper_bound AppautoscalingPolicy#metric_interval_upper_bound}.

---

### AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration <a name="AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration.Initializer"></a>

```typescript
import { appautoscalingPolicy } from '@cdktf/provider-aws'

const appautoscalingPolicyTargetTrackingScalingPolicyConfiguration: appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration.property.targetValue">targetValue</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#target_value AppautoscalingPolicy#target_value}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration.property.customizedMetricSpecification">customizedMetricSpecification</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification</a></code> | customized_metric_specification block. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration.property.disableScaleIn">disableScaleIn</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#disable_scale_in AppautoscalingPolicy#disable_scale_in}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration.property.predefinedMetricSpecification">predefinedMetricSpecification</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification</a></code> | predefined_metric_specification block. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration.property.scaleInCooldown">scaleInCooldown</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#scale_in_cooldown AppautoscalingPolicy#scale_in_cooldown}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration.property.scaleOutCooldown">scaleOutCooldown</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#scale_out_cooldown AppautoscalingPolicy#scale_out_cooldown}. |

---

##### `targetValue`<sup>Required</sup> <a name="targetValue" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration.property.targetValue"></a>

```typescript
public readonly targetValue: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#target_value AppautoscalingPolicy#target_value}.

---

##### `customizedMetricSpecification`<sup>Optional</sup> <a name="customizedMetricSpecification" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration.property.customizedMetricSpecification"></a>

```typescript
public readonly customizedMetricSpecification: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification;
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification</a>

customized_metric_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#customized_metric_specification AppautoscalingPolicy#customized_metric_specification}

---

##### `disableScaleIn`<sup>Optional</sup> <a name="disableScaleIn" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration.property.disableScaleIn"></a>

```typescript
public readonly disableScaleIn: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#disable_scale_in AppautoscalingPolicy#disable_scale_in}.

---

##### `predefinedMetricSpecification`<sup>Optional</sup> <a name="predefinedMetricSpecification" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration.property.predefinedMetricSpecification"></a>

```typescript
public readonly predefinedMetricSpecification: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification;
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification</a>

predefined_metric_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#predefined_metric_specification AppautoscalingPolicy#predefined_metric_specification}

---

##### `scaleInCooldown`<sup>Optional</sup> <a name="scaleInCooldown" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration.property.scaleInCooldown"></a>

```typescript
public readonly scaleInCooldown: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#scale_in_cooldown AppautoscalingPolicy#scale_in_cooldown}.

---

##### `scaleOutCooldown`<sup>Optional</sup> <a name="scaleOutCooldown" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration.property.scaleOutCooldown"></a>

```typescript
public readonly scaleOutCooldown: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#scale_out_cooldown AppautoscalingPolicy#scale_out_cooldown}.

---

### AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification <a name="AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification.Initializer"></a>

```typescript
import { appautoscalingPolicy } from '@cdktf/provider-aws'

const appautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification: appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification.property.metricName">metricName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#metric_name AppautoscalingPolicy#metric_name}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#namespace AppautoscalingPolicy#namespace}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification.property.statistic">statistic</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#statistic AppautoscalingPolicy#statistic}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification.property.dimensions">dimensions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions</a>[]</code> | dimensions block. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification.property.unit">unit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#unit AppautoscalingPolicy#unit}. |

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#metric_name AppautoscalingPolicy#metric_name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#namespace AppautoscalingPolicy#namespace}.

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification.property.statistic"></a>

```typescript
public readonly statistic: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#statistic AppautoscalingPolicy#statistic}.

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification.property.dimensions"></a>

```typescript
public readonly dimensions: IResolvable | AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions</a>[]

dimensions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#dimensions AppautoscalingPolicy#dimensions}

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#unit AppautoscalingPolicy#unit}.

---

### AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions <a name="AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions.Initializer"></a>

```typescript
import { appautoscalingPolicy } from '@cdktf/provider-aws'

const appautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions: appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#name AppautoscalingPolicy#name}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#value AppautoscalingPolicy#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#name AppautoscalingPolicy#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#value AppautoscalingPolicy#value}.

---

### AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification <a name="AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification.Initializer"></a>

```typescript
import { appautoscalingPolicy } from '@cdktf/provider-aws'

const appautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification: appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification.property.predefinedMetricType">predefinedMetricType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#predefined_metric_type AppautoscalingPolicy#predefined_metric_type}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification.property.resourceLabel">resourceLabel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#resource_label AppautoscalingPolicy#resource_label}. |

---

##### `predefinedMetricType`<sup>Required</sup> <a name="predefinedMetricType" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification.property.predefinedMetricType"></a>

```typescript
public readonly predefinedMetricType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#predefined_metric_type AppautoscalingPolicy#predefined_metric_type}.

---

##### `resourceLabel`<sup>Optional</sup> <a name="resourceLabel" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification.property.resourceLabel"></a>

```typescript
public readonly resourceLabel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy#resource_label AppautoscalingPolicy#resource_label}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference <a name="AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.Initializer"></a>

```typescript
import { appautoscalingPolicy } from '@cdktf/provider-aws'

new appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.putStepAdjustment">putStepAdjustment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.resetAdjustmentType">resetAdjustmentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.resetCooldown">resetCooldown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.resetMetricAggregationType">resetMetricAggregationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.resetMinAdjustmentMagnitude">resetMinAdjustmentMagnitude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.resetStepAdjustment">resetStepAdjustment</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStepAdjustment` <a name="putStepAdjustment" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.putStepAdjustment"></a>

```typescript
public putStepAdjustment(value: IResolvable | AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.putStepAdjustment.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment">AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment</a>[]

---

##### `resetAdjustmentType` <a name="resetAdjustmentType" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.resetAdjustmentType"></a>

```typescript
public resetAdjustmentType(): void
```

##### `resetCooldown` <a name="resetCooldown" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.resetCooldown"></a>

```typescript
public resetCooldown(): void
```

##### `resetMetricAggregationType` <a name="resetMetricAggregationType" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.resetMetricAggregationType"></a>

```typescript
public resetMetricAggregationType(): void
```

##### `resetMinAdjustmentMagnitude` <a name="resetMinAdjustmentMagnitude" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.resetMinAdjustmentMagnitude"></a>

```typescript
public resetMinAdjustmentMagnitude(): void
```

##### `resetStepAdjustment` <a name="resetStepAdjustment" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.resetStepAdjustment"></a>

```typescript
public resetStepAdjustment(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.property.stepAdjustment">stepAdjustment</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList">AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.property.adjustmentTypeInput">adjustmentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.property.cooldownInput">cooldownInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.property.metricAggregationTypeInput">metricAggregationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.property.minAdjustmentMagnitudeInput">minAdjustmentMagnitudeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.property.stepAdjustmentInput">stepAdjustmentInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment">AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.property.adjustmentType">adjustmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.property.cooldown">cooldown</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.property.metricAggregationType">metricAggregationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.property.minAdjustmentMagnitude">minAdjustmentMagnitude</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfiguration">AppautoscalingPolicyStepScalingPolicyConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `stepAdjustment`<sup>Required</sup> <a name="stepAdjustment" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.property.stepAdjustment"></a>

```typescript
public readonly stepAdjustment: AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList;
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList">AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList</a>

---

##### `adjustmentTypeInput`<sup>Optional</sup> <a name="adjustmentTypeInput" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.property.adjustmentTypeInput"></a>

```typescript
public readonly adjustmentTypeInput: string;
```

- *Type:* string

---

##### `cooldownInput`<sup>Optional</sup> <a name="cooldownInput" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.property.cooldownInput"></a>

```typescript
public readonly cooldownInput: number;
```

- *Type:* number

---

##### `metricAggregationTypeInput`<sup>Optional</sup> <a name="metricAggregationTypeInput" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.property.metricAggregationTypeInput"></a>

```typescript
public readonly metricAggregationTypeInput: string;
```

- *Type:* string

---

##### `minAdjustmentMagnitudeInput`<sup>Optional</sup> <a name="minAdjustmentMagnitudeInput" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.property.minAdjustmentMagnitudeInput"></a>

```typescript
public readonly minAdjustmentMagnitudeInput: number;
```

- *Type:* number

---

##### `stepAdjustmentInput`<sup>Optional</sup> <a name="stepAdjustmentInput" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.property.stepAdjustmentInput"></a>

```typescript
public readonly stepAdjustmentInput: IResolvable | AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment">AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment</a>[]

---

##### `adjustmentType`<sup>Required</sup> <a name="adjustmentType" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.property.adjustmentType"></a>

```typescript
public readonly adjustmentType: string;
```

- *Type:* string

---

##### `cooldown`<sup>Required</sup> <a name="cooldown" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.property.cooldown"></a>

```typescript
public readonly cooldown: number;
```

- *Type:* number

---

##### `metricAggregationType`<sup>Required</sup> <a name="metricAggregationType" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.property.metricAggregationType"></a>

```typescript
public readonly metricAggregationType: string;
```

- *Type:* string

---

##### `minAdjustmentMagnitude`<sup>Required</sup> <a name="minAdjustmentMagnitude" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.property.minAdjustmentMagnitude"></a>

```typescript
public readonly minAdjustmentMagnitude: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppautoscalingPolicyStepScalingPolicyConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfiguration">AppautoscalingPolicyStepScalingPolicyConfiguration</a>

---


### AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList <a name="AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList.Initializer"></a>

```typescript
import { appautoscalingPolicy } from '@cdktf/provider-aws'

new appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList.get"></a>

```typescript
public get(index: number): AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment">AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment">AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment</a>[]

---


### AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference <a name="AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.Initializer"></a>

```typescript
import { appautoscalingPolicy } from '@cdktf/provider-aws'

new appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.resetMetricIntervalLowerBound">resetMetricIntervalLowerBound</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.resetMetricIntervalUpperBound">resetMetricIntervalUpperBound</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricIntervalLowerBound` <a name="resetMetricIntervalLowerBound" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.resetMetricIntervalLowerBound"></a>

```typescript
public resetMetricIntervalLowerBound(): void
```

##### `resetMetricIntervalUpperBound` <a name="resetMetricIntervalUpperBound" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.resetMetricIntervalUpperBound"></a>

```typescript
public resetMetricIntervalUpperBound(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.property.metricIntervalLowerBoundInput">metricIntervalLowerBoundInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.property.metricIntervalUpperBoundInput">metricIntervalUpperBoundInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.property.scalingAdjustmentInput">scalingAdjustmentInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.property.metricIntervalLowerBound">metricIntervalLowerBound</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.property.metricIntervalUpperBound">metricIntervalUpperBound</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.property.scalingAdjustment">scalingAdjustment</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment">AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricIntervalLowerBoundInput`<sup>Optional</sup> <a name="metricIntervalLowerBoundInput" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.property.metricIntervalLowerBoundInput"></a>

```typescript
public readonly metricIntervalLowerBoundInput: string;
```

- *Type:* string

---

##### `metricIntervalUpperBoundInput`<sup>Optional</sup> <a name="metricIntervalUpperBoundInput" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.property.metricIntervalUpperBoundInput"></a>

```typescript
public readonly metricIntervalUpperBoundInput: string;
```

- *Type:* string

---

##### `scalingAdjustmentInput`<sup>Optional</sup> <a name="scalingAdjustmentInput" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.property.scalingAdjustmentInput"></a>

```typescript
public readonly scalingAdjustmentInput: number;
```

- *Type:* number

---

##### `metricIntervalLowerBound`<sup>Required</sup> <a name="metricIntervalLowerBound" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.property.metricIntervalLowerBound"></a>

```typescript
public readonly metricIntervalLowerBound: string;
```

- *Type:* string

---

##### `metricIntervalUpperBound`<sup>Required</sup> <a name="metricIntervalUpperBound" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.property.metricIntervalUpperBound"></a>

```typescript
public readonly metricIntervalUpperBound: string;
```

- *Type:* string

---

##### `scalingAdjustment`<sup>Required</sup> <a name="scalingAdjustment" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.property.scalingAdjustment"></a>

```typescript
public readonly scalingAdjustment: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment">AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment</a> | cdktf.IResolvable

---


### AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList <a name="AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList.Initializer"></a>

```typescript
import { appautoscalingPolicy } from '@cdktf/provider-aws'

new appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList.get"></a>

```typescript
public get(index: number): AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions</a>[]

---


### AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference <a name="AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.Initializer"></a>

```typescript
import { appautoscalingPolicy } from '@cdktf/provider-aws'

new appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions</a> | cdktf.IResolvable

---


### AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference <a name="AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.Initializer"></a>

```typescript
import { appautoscalingPolicy } from '@cdktf/provider-aws'

new appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.putDimensions">putDimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.resetDimensions">resetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.resetUnit">resetUnit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDimensions` <a name="putDimensions" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.putDimensions"></a>

```typescript
public putDimensions(value: IResolvable | AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.putDimensions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions</a>[]

---

##### `resetDimensions` <a name="resetDimensions" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.resetDimensions"></a>

```typescript
public resetDimensions(): void
```

##### `resetUnit` <a name="resetUnit" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.resetUnit"></a>

```typescript
public resetUnit(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.property.dimensions">dimensions</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.property.dimensionsInput">dimensionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.property.metricNameInput">metricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.property.statisticInput">statisticInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.property.unitInput">unitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.property.metricName">metricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.property.statistic">statistic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.property.dimensions"></a>

```typescript
public readonly dimensions: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList;
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList</a>

---

##### `dimensionsInput`<sup>Optional</sup> <a name="dimensionsInput" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.property.dimensionsInput"></a>

```typescript
public readonly dimensionsInput: IResolvable | AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions</a>[]

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.property.metricNameInput"></a>

```typescript
public readonly metricNameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `statisticInput`<sup>Optional</sup> <a name="statisticInput" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.property.statisticInput"></a>

```typescript
public readonly statisticInput: string;
```

- *Type:* string

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.property.unitInput"></a>

```typescript
public readonly unitInput: string;
```

- *Type:* string

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.property.statistic"></a>

```typescript
public readonly statistic: string;
```

- *Type:* string

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification;
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification</a>

---


### AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference <a name="AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.Initializer"></a>

```typescript
import { appautoscalingPolicy } from '@cdktf/provider-aws'

new appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.putCustomizedMetricSpecification">putCustomizedMetricSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.putPredefinedMetricSpecification">putPredefinedMetricSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetCustomizedMetricSpecification">resetCustomizedMetricSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetDisableScaleIn">resetDisableScaleIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetPredefinedMetricSpecification">resetPredefinedMetricSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetScaleInCooldown">resetScaleInCooldown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetScaleOutCooldown">resetScaleOutCooldown</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomizedMetricSpecification` <a name="putCustomizedMetricSpecification" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.putCustomizedMetricSpecification"></a>

```typescript
public putCustomizedMetricSpecification(value: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.putCustomizedMetricSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification</a>

---

##### `putPredefinedMetricSpecification` <a name="putPredefinedMetricSpecification" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.putPredefinedMetricSpecification"></a>

```typescript
public putPredefinedMetricSpecification(value: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.putPredefinedMetricSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification</a>

---

##### `resetCustomizedMetricSpecification` <a name="resetCustomizedMetricSpecification" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetCustomizedMetricSpecification"></a>

```typescript
public resetCustomizedMetricSpecification(): void
```

##### `resetDisableScaleIn` <a name="resetDisableScaleIn" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetDisableScaleIn"></a>

```typescript
public resetDisableScaleIn(): void
```

##### `resetPredefinedMetricSpecification` <a name="resetPredefinedMetricSpecification" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetPredefinedMetricSpecification"></a>

```typescript
public resetPredefinedMetricSpecification(): void
```

##### `resetScaleInCooldown` <a name="resetScaleInCooldown" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetScaleInCooldown"></a>

```typescript
public resetScaleInCooldown(): void
```

##### `resetScaleOutCooldown` <a name="resetScaleOutCooldown" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetScaleOutCooldown"></a>

```typescript
public resetScaleOutCooldown(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.customizedMetricSpecification">customizedMetricSpecification</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.predefinedMetricSpecification">predefinedMetricSpecification</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.customizedMetricSpecificationInput">customizedMetricSpecificationInput</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.disableScaleInInput">disableScaleInInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.predefinedMetricSpecificationInput">predefinedMetricSpecificationInput</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleInCooldownInput">scaleInCooldownInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleOutCooldownInput">scaleOutCooldownInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.targetValueInput">targetValueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.disableScaleIn">disableScaleIn</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleInCooldown">scaleInCooldown</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleOutCooldown">scaleOutCooldown</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.targetValue">targetValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration">AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customizedMetricSpecification`<sup>Required</sup> <a name="customizedMetricSpecification" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.customizedMetricSpecification"></a>

```typescript
public readonly customizedMetricSpecification: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference</a>

---

##### `predefinedMetricSpecification`<sup>Required</sup> <a name="predefinedMetricSpecification" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.predefinedMetricSpecification"></a>

```typescript
public readonly predefinedMetricSpecification: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference</a>

---

##### `customizedMetricSpecificationInput`<sup>Optional</sup> <a name="customizedMetricSpecificationInput" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.customizedMetricSpecificationInput"></a>

```typescript
public readonly customizedMetricSpecificationInput: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification;
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification</a>

---

##### `disableScaleInInput`<sup>Optional</sup> <a name="disableScaleInInput" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.disableScaleInInput"></a>

```typescript
public readonly disableScaleInInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `predefinedMetricSpecificationInput`<sup>Optional</sup> <a name="predefinedMetricSpecificationInput" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.predefinedMetricSpecificationInput"></a>

```typescript
public readonly predefinedMetricSpecificationInput: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification;
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification</a>

---

##### `scaleInCooldownInput`<sup>Optional</sup> <a name="scaleInCooldownInput" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleInCooldownInput"></a>

```typescript
public readonly scaleInCooldownInput: number;
```

- *Type:* number

---

##### `scaleOutCooldownInput`<sup>Optional</sup> <a name="scaleOutCooldownInput" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleOutCooldownInput"></a>

```typescript
public readonly scaleOutCooldownInput: number;
```

- *Type:* number

---

##### `targetValueInput`<sup>Optional</sup> <a name="targetValueInput" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.targetValueInput"></a>

```typescript
public readonly targetValueInput: number;
```

- *Type:* number

---

##### `disableScaleIn`<sup>Required</sup> <a name="disableScaleIn" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.disableScaleIn"></a>

```typescript
public readonly disableScaleIn: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `scaleInCooldown`<sup>Required</sup> <a name="scaleInCooldown" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleInCooldown"></a>

```typescript
public readonly scaleInCooldown: number;
```

- *Type:* number

---

##### `scaleOutCooldown`<sup>Required</sup> <a name="scaleOutCooldown" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleOutCooldown"></a>

```typescript
public readonly scaleOutCooldown: number;
```

- *Type:* number

---

##### `targetValue`<sup>Required</sup> <a name="targetValue" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.targetValue"></a>

```typescript
public readonly targetValue: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration">AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration</a>

---


### AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference <a name="AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.Initializer"></a>

```typescript
import { appautoscalingPolicy } from '@cdktf/provider-aws'

new appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.resetResourceLabel">resetResourceLabel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResourceLabel` <a name="resetResourceLabel" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.resetResourceLabel"></a>

```typescript
public resetResourceLabel(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.property.predefinedMetricTypeInput">predefinedMetricTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.property.resourceLabelInput">resourceLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.property.predefinedMetricType">predefinedMetricType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.property.resourceLabel">resourceLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `predefinedMetricTypeInput`<sup>Optional</sup> <a name="predefinedMetricTypeInput" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.property.predefinedMetricTypeInput"></a>

```typescript
public readonly predefinedMetricTypeInput: string;
```

- *Type:* string

---

##### `resourceLabelInput`<sup>Optional</sup> <a name="resourceLabelInput" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.property.resourceLabelInput"></a>

```typescript
public readonly resourceLabelInput: string;
```

- *Type:* string

---

##### `predefinedMetricType`<sup>Required</sup> <a name="predefinedMetricType" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.property.predefinedMetricType"></a>

```typescript
public readonly predefinedMetricType: string;
```

- *Type:* string

---

##### `resourceLabel`<sup>Required</sup> <a name="resourceLabel" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.property.resourceLabel"></a>

```typescript
public readonly resourceLabel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification;
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification</a>

---



