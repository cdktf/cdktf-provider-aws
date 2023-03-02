# `sesConfigurationSet` Submodule <a name="`sesConfigurationSet` Submodule" id="@cdktf/provider-aws.sesConfigurationSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SesConfigurationSet <a name="SesConfigurationSet" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ses_configuration_set aws_ses_configuration_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.Initializer"></a>

```typescript
import { sesConfigurationSet } from '@cdktf/provider-aws'

new sesConfigurationSet.SesConfigurationSet(scope: Construct, id: string, config: SesConfigurationSetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetConfig">SesConfigurationSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetConfig">SesConfigurationSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.putDeliveryOptions">putDeliveryOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.putTrackingOptions">putTrackingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.resetDeliveryOptions">resetDeliveryOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.resetReputationMetricsEnabled">resetReputationMetricsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.resetSendingEnabled">resetSendingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.resetTrackingOptions">resetTrackingOptions</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putDeliveryOptions` <a name="putDeliveryOptions" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.putDeliveryOptions"></a>

```typescript
public putDeliveryOptions(value: SesConfigurationSetDeliveryOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.putDeliveryOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptions">SesConfigurationSetDeliveryOptions</a>

---

##### `putTrackingOptions` <a name="putTrackingOptions" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.putTrackingOptions"></a>

```typescript
public putTrackingOptions(value: SesConfigurationSetTrackingOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.putTrackingOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptions">SesConfigurationSetTrackingOptions</a>

---

##### `resetDeliveryOptions` <a name="resetDeliveryOptions" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.resetDeliveryOptions"></a>

```typescript
public resetDeliveryOptions(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.resetId"></a>

```typescript
public resetId(): void
```

##### `resetReputationMetricsEnabled` <a name="resetReputationMetricsEnabled" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.resetReputationMetricsEnabled"></a>

```typescript
public resetReputationMetricsEnabled(): void
```

##### `resetSendingEnabled` <a name="resetSendingEnabled" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.resetSendingEnabled"></a>

```typescript
public resetSendingEnabled(): void
```

##### `resetTrackingOptions` <a name="resetTrackingOptions" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.resetTrackingOptions"></a>

```typescript
public resetTrackingOptions(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.isConstruct"></a>

```typescript
import { sesConfigurationSet } from '@cdktf/provider-aws'

sesConfigurationSet.SesConfigurationSet.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.isTerraformElement"></a>

```typescript
import { sesConfigurationSet } from '@cdktf/provider-aws'

sesConfigurationSet.SesConfigurationSet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.isTerraformResource"></a>

```typescript
import { sesConfigurationSet } from '@cdktf/provider-aws'

sesConfigurationSet.SesConfigurationSet.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.deliveryOptions">deliveryOptions</a></code> | <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference">SesConfigurationSetDeliveryOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.lastFreshStart">lastFreshStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.trackingOptions">trackingOptions</a></code> | <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference">SesConfigurationSetTrackingOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.deliveryOptionsInput">deliveryOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptions">SesConfigurationSetDeliveryOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.reputationMetricsEnabledInput">reputationMetricsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.sendingEnabledInput">sendingEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.trackingOptionsInput">trackingOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptions">SesConfigurationSetTrackingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.reputationMetricsEnabled">reputationMetricsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.sendingEnabled">sendingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `deliveryOptions`<sup>Required</sup> <a name="deliveryOptions" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.deliveryOptions"></a>

```typescript
public readonly deliveryOptions: SesConfigurationSetDeliveryOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference">SesConfigurationSetDeliveryOptionsOutputReference</a>

---

##### `lastFreshStart`<sup>Required</sup> <a name="lastFreshStart" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.lastFreshStart"></a>

```typescript
public readonly lastFreshStart: string;
```

- *Type:* string

---

##### `trackingOptions`<sup>Required</sup> <a name="trackingOptions" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.trackingOptions"></a>

```typescript
public readonly trackingOptions: SesConfigurationSetTrackingOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference">SesConfigurationSetTrackingOptionsOutputReference</a>

---

##### `deliveryOptionsInput`<sup>Optional</sup> <a name="deliveryOptionsInput" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.deliveryOptionsInput"></a>

```typescript
public readonly deliveryOptionsInput: SesConfigurationSetDeliveryOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptions">SesConfigurationSetDeliveryOptions</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `reputationMetricsEnabledInput`<sup>Optional</sup> <a name="reputationMetricsEnabledInput" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.reputationMetricsEnabledInput"></a>

```typescript
public readonly reputationMetricsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sendingEnabledInput`<sup>Optional</sup> <a name="sendingEnabledInput" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.sendingEnabledInput"></a>

```typescript
public readonly sendingEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `trackingOptionsInput`<sup>Optional</sup> <a name="trackingOptionsInput" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.trackingOptionsInput"></a>

```typescript
public readonly trackingOptionsInput: SesConfigurationSetTrackingOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptions">SesConfigurationSetTrackingOptions</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `reputationMetricsEnabled`<sup>Required</sup> <a name="reputationMetricsEnabled" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.reputationMetricsEnabled"></a>

```typescript
public readonly reputationMetricsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sendingEnabled`<sup>Required</sup> <a name="sendingEnabled" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.sendingEnabled"></a>

```typescript
public readonly sendingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SesConfigurationSetConfig <a name="SesConfigurationSetConfig" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetConfig.Initializer"></a>

```typescript
import { sesConfigurationSet } from '@cdktf/provider-aws'

const sesConfigurationSetConfig: sesConfigurationSet.SesConfigurationSetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_configuration_set#name SesConfigurationSet#name}. |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetConfig.property.deliveryOptions">deliveryOptions</a></code> | <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptions">SesConfigurationSetDeliveryOptions</a></code> | delivery_options block. |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_configuration_set#id SesConfigurationSet#id}. |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetConfig.property.reputationMetricsEnabled">reputationMetricsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_configuration_set#reputation_metrics_enabled SesConfigurationSet#reputation_metrics_enabled}. |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetConfig.property.sendingEnabled">sendingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_configuration_set#sending_enabled SesConfigurationSet#sending_enabled}. |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetConfig.property.trackingOptions">trackingOptions</a></code> | <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptions">SesConfigurationSetTrackingOptions</a></code> | tracking_options block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_configuration_set#name SesConfigurationSet#name}.

---

##### `deliveryOptions`<sup>Optional</sup> <a name="deliveryOptions" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetConfig.property.deliveryOptions"></a>

```typescript
public readonly deliveryOptions: SesConfigurationSetDeliveryOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptions">SesConfigurationSetDeliveryOptions</a>

delivery_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_configuration_set#delivery_options SesConfigurationSet#delivery_options}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_configuration_set#id SesConfigurationSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `reputationMetricsEnabled`<sup>Optional</sup> <a name="reputationMetricsEnabled" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetConfig.property.reputationMetricsEnabled"></a>

```typescript
public readonly reputationMetricsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_configuration_set#reputation_metrics_enabled SesConfigurationSet#reputation_metrics_enabled}.

---

##### `sendingEnabled`<sup>Optional</sup> <a name="sendingEnabled" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetConfig.property.sendingEnabled"></a>

```typescript
public readonly sendingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_configuration_set#sending_enabled SesConfigurationSet#sending_enabled}.

---

##### `trackingOptions`<sup>Optional</sup> <a name="trackingOptions" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetConfig.property.trackingOptions"></a>

```typescript
public readonly trackingOptions: SesConfigurationSetTrackingOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptions">SesConfigurationSetTrackingOptions</a>

tracking_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_configuration_set#tracking_options SesConfigurationSet#tracking_options}

---

### SesConfigurationSetDeliveryOptions <a name="SesConfigurationSetDeliveryOptions" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptions.Initializer"></a>

```typescript
import { sesConfigurationSet } from '@cdktf/provider-aws'

const sesConfigurationSetDeliveryOptions: sesConfigurationSet.SesConfigurationSetDeliveryOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptions.property.tlsPolicy">tlsPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_configuration_set#tls_policy SesConfigurationSet#tls_policy}. |

---

##### `tlsPolicy`<sup>Optional</sup> <a name="tlsPolicy" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptions.property.tlsPolicy"></a>

```typescript
public readonly tlsPolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_configuration_set#tls_policy SesConfigurationSet#tls_policy}.

---

### SesConfigurationSetTrackingOptions <a name="SesConfigurationSetTrackingOptions" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptions.Initializer"></a>

```typescript
import { sesConfigurationSet } from '@cdktf/provider-aws'

const sesConfigurationSetTrackingOptions: sesConfigurationSet.SesConfigurationSetTrackingOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptions.property.customRedirectDomain">customRedirectDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_configuration_set#custom_redirect_domain SesConfigurationSet#custom_redirect_domain}. |

---

##### `customRedirectDomain`<sup>Optional</sup> <a name="customRedirectDomain" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptions.property.customRedirectDomain"></a>

```typescript
public readonly customRedirectDomain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_configuration_set#custom_redirect_domain SesConfigurationSet#custom_redirect_domain}.

---

## Classes <a name="Classes" id="Classes"></a>

### SesConfigurationSetDeliveryOptionsOutputReference <a name="SesConfigurationSetDeliveryOptionsOutputReference" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.Initializer"></a>

```typescript
import { sesConfigurationSet } from '@cdktf/provider-aws'

new sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.resetTlsPolicy">resetTlsPolicy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTlsPolicy` <a name="resetTlsPolicy" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.resetTlsPolicy"></a>

```typescript
public resetTlsPolicy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.tlsPolicyInput">tlsPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.tlsPolicy">tlsPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptions">SesConfigurationSetDeliveryOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tlsPolicyInput`<sup>Optional</sup> <a name="tlsPolicyInput" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.tlsPolicyInput"></a>

```typescript
public readonly tlsPolicyInput: string;
```

- *Type:* string

---

##### `tlsPolicy`<sup>Required</sup> <a name="tlsPolicy" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.tlsPolicy"></a>

```typescript
public readonly tlsPolicy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SesConfigurationSetDeliveryOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptions">SesConfigurationSetDeliveryOptions</a>

---


### SesConfigurationSetTrackingOptionsOutputReference <a name="SesConfigurationSetTrackingOptionsOutputReference" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.Initializer"></a>

```typescript
import { sesConfigurationSet } from '@cdktf/provider-aws'

new sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.resetCustomRedirectDomain">resetCustomRedirectDomain</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustomRedirectDomain` <a name="resetCustomRedirectDomain" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.resetCustomRedirectDomain"></a>

```typescript
public resetCustomRedirectDomain(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.property.customRedirectDomainInput">customRedirectDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.property.customRedirectDomain">customRedirectDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptions">SesConfigurationSetTrackingOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customRedirectDomainInput`<sup>Optional</sup> <a name="customRedirectDomainInput" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.property.customRedirectDomainInput"></a>

```typescript
public readonly customRedirectDomainInput: string;
```

- *Type:* string

---

##### `customRedirectDomain`<sup>Required</sup> <a name="customRedirectDomain" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.property.customRedirectDomain"></a>

```typescript
public readonly customRedirectDomain: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SesConfigurationSetTrackingOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptions">SesConfigurationSetTrackingOptions</a>

---



