# `rdsReservedInstance` Submodule <a name="`rdsReservedInstance` Submodule" id="@cdktf/provider-aws.rdsReservedInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RdsReservedInstance <a name="RdsReservedInstance" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/rds_reserved_instance aws_rds_reserved_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.Initializer"></a>

```typescript
import { rdsReservedInstance } from '@cdktf/provider-aws'

new rdsReservedInstance.RdsReservedInstance(scope: Construct, id: string, config: RdsReservedInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig">RdsReservedInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig">RdsReservedInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.resetInstanceCount">resetInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.resetReservationId">resetReservationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.putTimeouts"></a>

```typescript
public putTimeouts(value: RdsReservedInstanceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeouts">RdsReservedInstanceTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInstanceCount` <a name="resetInstanceCount" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.resetInstanceCount"></a>

```typescript
public resetInstanceCount(): void
```

##### `resetReservationId` <a name="resetReservationId" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.resetReservationId"></a>

```typescript
public resetReservationId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.isConstruct"></a>

```typescript
import { rdsReservedInstance } from '@cdktf/provider-aws'

rdsReservedInstance.RdsReservedInstance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.isTerraformElement"></a>

```typescript
import { rdsReservedInstance } from '@cdktf/provider-aws'

rdsReservedInstance.RdsReservedInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.isTerraformResource"></a>

```typescript
import { rdsReservedInstance } from '@cdktf/provider-aws'

rdsReservedInstance.RdsReservedInstance.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.currencyCode">currencyCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.dbInstanceClass">dbInstanceClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.duration">duration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.fixedPrice">fixedPrice</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.leaseId">leaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.multiAz">multiAz</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.offeringType">offeringType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.productDescription">productDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.recurringCharges">recurringCharges</a></code> | <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesList">RdsReservedInstanceRecurringChargesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference">RdsReservedInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.usagePrice">usagePrice</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.instanceCountInput">instanceCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.offeringIdInput">offeringIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.reservationIdInput">reservationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeouts">RdsReservedInstanceTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.instanceCount">instanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.offeringId">offeringId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.reservationId">reservationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `currencyCode`<sup>Required</sup> <a name="currencyCode" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.currencyCode"></a>

```typescript
public readonly currencyCode: string;
```

- *Type:* string

---

##### `dbInstanceClass`<sup>Required</sup> <a name="dbInstanceClass" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.dbInstanceClass"></a>

```typescript
public readonly dbInstanceClass: string;
```

- *Type:* string

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.duration"></a>

```typescript
public readonly duration: number;
```

- *Type:* number

---

##### `fixedPrice`<sup>Required</sup> <a name="fixedPrice" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.fixedPrice"></a>

```typescript
public readonly fixedPrice: number;
```

- *Type:* number

---

##### `leaseId`<sup>Required</sup> <a name="leaseId" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.leaseId"></a>

```typescript
public readonly leaseId: string;
```

- *Type:* string

---

##### `multiAz`<sup>Required</sup> <a name="multiAz" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.multiAz"></a>

```typescript
public readonly multiAz: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `offeringType`<sup>Required</sup> <a name="offeringType" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.offeringType"></a>

```typescript
public readonly offeringType: string;
```

- *Type:* string

---

##### `productDescription`<sup>Required</sup> <a name="productDescription" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.productDescription"></a>

```typescript
public readonly productDescription: string;
```

- *Type:* string

---

##### `recurringCharges`<sup>Required</sup> <a name="recurringCharges" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.recurringCharges"></a>

```typescript
public readonly recurringCharges: RdsReservedInstanceRecurringChargesList;
```

- *Type:* <a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesList">RdsReservedInstanceRecurringChargesList</a>

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.timeouts"></a>

```typescript
public readonly timeouts: RdsReservedInstanceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference">RdsReservedInstanceTimeoutsOutputReference</a>

---

##### `usagePrice`<sup>Required</sup> <a name="usagePrice" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.usagePrice"></a>

```typescript
public readonly usagePrice: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceCountInput`<sup>Optional</sup> <a name="instanceCountInput" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.instanceCountInput"></a>

```typescript
public readonly instanceCountInput: number;
```

- *Type:* number

---

##### `offeringIdInput`<sup>Optional</sup> <a name="offeringIdInput" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.offeringIdInput"></a>

```typescript
public readonly offeringIdInput: string;
```

- *Type:* string

---

##### `reservationIdInput`<sup>Optional</sup> <a name="reservationIdInput" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.reservationIdInput"></a>

```typescript
public readonly reservationIdInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: RdsReservedInstanceTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeouts">RdsReservedInstanceTimeouts</a> | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceCount`<sup>Required</sup> <a name="instanceCount" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.instanceCount"></a>

```typescript
public readonly instanceCount: number;
```

- *Type:* number

---

##### `offeringId`<sup>Required</sup> <a name="offeringId" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.offeringId"></a>

```typescript
public readonly offeringId: string;
```

- *Type:* string

---

##### `reservationId`<sup>Required</sup> <a name="reservationId" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.reservationId"></a>

```typescript
public readonly reservationId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RdsReservedInstanceConfig <a name="RdsReservedInstanceConfig" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.Initializer"></a>

```typescript
import { rdsReservedInstance } from '@cdktf/provider-aws'

const rdsReservedInstanceConfig: rdsReservedInstance.RdsReservedInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.offeringId">offeringId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_reserved_instance#offering_id RdsReservedInstance#offering_id}. |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_reserved_instance#id RdsReservedInstance#id}. |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.instanceCount">instanceCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_reserved_instance#instance_count RdsReservedInstance#instance_count}. |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.reservationId">reservationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_reserved_instance#reservation_id RdsReservedInstance#reservation_id}. |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_reserved_instance#tags RdsReservedInstance#tags}. |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_reserved_instance#tags_all RdsReservedInstance#tags_all}. |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeouts">RdsReservedInstanceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `offeringId`<sup>Required</sup> <a name="offeringId" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.offeringId"></a>

```typescript
public readonly offeringId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_reserved_instance#offering_id RdsReservedInstance#offering_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_reserved_instance#id RdsReservedInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceCount`<sup>Optional</sup> <a name="instanceCount" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.instanceCount"></a>

```typescript
public readonly instanceCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_reserved_instance#instance_count RdsReservedInstance#instance_count}.

---

##### `reservationId`<sup>Optional</sup> <a name="reservationId" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.reservationId"></a>

```typescript
public readonly reservationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_reserved_instance#reservation_id RdsReservedInstance#reservation_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_reserved_instance#tags RdsReservedInstance#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_reserved_instance#tags_all RdsReservedInstance#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: RdsReservedInstanceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeouts">RdsReservedInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_reserved_instance#timeouts RdsReservedInstance#timeouts}

---

### RdsReservedInstanceRecurringCharges <a name="RdsReservedInstanceRecurringCharges" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringCharges"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringCharges.Initializer"></a>

```typescript
import { rdsReservedInstance } from '@cdktf/provider-aws'

const rdsReservedInstanceRecurringCharges: rdsReservedInstance.RdsReservedInstanceRecurringCharges = { ... }
```


### RdsReservedInstanceTimeouts <a name="RdsReservedInstanceTimeouts" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeouts.Initializer"></a>

```typescript
import { rdsReservedInstance } from '@cdktf/provider-aws'

const rdsReservedInstanceTimeouts: rdsReservedInstance.RdsReservedInstanceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_reserved_instance#create RdsReservedInstance#create}. |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_reserved_instance#delete RdsReservedInstance#delete}. |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_reserved_instance#update RdsReservedInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_reserved_instance#create RdsReservedInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_reserved_instance#delete RdsReservedInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_reserved_instance#update RdsReservedInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### RdsReservedInstanceRecurringChargesList <a name="RdsReservedInstanceRecurringChargesList" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesList.Initializer"></a>

```typescript
import { rdsReservedInstance } from '@cdktf/provider-aws'

new rdsReservedInstance.RdsReservedInstanceRecurringChargesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesList.get"></a>

```typescript
public get(index: number): RdsReservedInstanceRecurringChargesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### RdsReservedInstanceRecurringChargesOutputReference <a name="RdsReservedInstanceRecurringChargesOutputReference" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.Initializer"></a>

```typescript
import { rdsReservedInstance } from '@cdktf/provider-aws'

new rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.property.recurringChargeAmount">recurringChargeAmount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.property.recurringChargeFrequency">recurringChargeFrequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringCharges">RdsReservedInstanceRecurringCharges</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `recurringChargeAmount`<sup>Required</sup> <a name="recurringChargeAmount" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.property.recurringChargeAmount"></a>

```typescript
public readonly recurringChargeAmount: number;
```

- *Type:* number

---

##### `recurringChargeFrequency`<sup>Required</sup> <a name="recurringChargeFrequency" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.property.recurringChargeFrequency"></a>

```typescript
public readonly recurringChargeFrequency: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RdsReservedInstanceRecurringCharges;
```

- *Type:* <a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringCharges">RdsReservedInstanceRecurringCharges</a>

---


### RdsReservedInstanceTimeoutsOutputReference <a name="RdsReservedInstanceTimeoutsOutputReference" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.Initializer"></a>

```typescript
import { rdsReservedInstance } from '@cdktf/provider-aws'

new rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeouts">RdsReservedInstanceTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RdsReservedInstanceTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeouts">RdsReservedInstanceTimeouts</a> | cdktf.IResolvable

---



