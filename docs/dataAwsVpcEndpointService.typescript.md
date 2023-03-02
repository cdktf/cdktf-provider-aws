# `dataAwsVpcEndpointService` Submodule <a name="`dataAwsVpcEndpointService` Submodule" id="@cdktf/provider-aws.dataAwsVpcEndpointService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsVpcEndpointService <a name="DataAwsVpcEndpointService" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint_service aws_vpc_endpoint_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.Initializer"></a>

```typescript
import { dataAwsVpcEndpointService } from '@cdktf/provider-aws'

new dataAwsVpcEndpointService.DataAwsVpcEndpointService(scope: Construct, id: string, config?: DataAwsVpcEndpointServiceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig">DataAwsVpcEndpointServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig">DataAwsVpcEndpointServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.resetService">resetService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.resetServiceName">resetServiceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.resetServiceType">resetServiceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataAwsVpcEndpointServiceFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilter">DataAwsVpcEndpointServiceFilter</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAwsVpcEndpointServiceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeouts">DataAwsVpcEndpointServiceTimeouts</a>

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.resetId"></a>

```typescript
public resetId(): void
```

##### `resetService` <a name="resetService" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.resetService"></a>

```typescript
public resetService(): void
```

##### `resetServiceName` <a name="resetServiceName" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.resetServiceName"></a>

```typescript
public resetServiceName(): void
```

##### `resetServiceType` <a name="resetServiceType" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.resetServiceType"></a>

```typescript
public resetServiceType(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.isConstruct"></a>

```typescript
import { dataAwsVpcEndpointService } from '@cdktf/provider-aws'

dataAwsVpcEndpointService.DataAwsVpcEndpointService.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.isTerraformElement"></a>

```typescript
import { dataAwsVpcEndpointService } from '@cdktf/provider-aws'

dataAwsVpcEndpointService.DataAwsVpcEndpointService.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.isTerraformDataSource"></a>

```typescript
import { dataAwsVpcEndpointService } from '@cdktf/provider-aws'

dataAwsVpcEndpointService.DataAwsVpcEndpointService.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.acceptanceRequired">acceptanceRequired</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.baseEndpointDnsNames">baseEndpointDnsNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterList">DataAwsVpcEndpointServiceFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.managesVpcEndpoints">managesVpcEndpoints</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.privateDnsName">privateDnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.serviceId">serviceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.supportedIpAddressTypes">supportedIpAddressTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference">DataAwsVpcEndpointServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.vpcEndpointPolicySupported">vpcEndpointPolicySupported</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilter">DataAwsVpcEndpointServiceFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.serviceNameInput">serviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.serviceTypeInput">serviceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeouts">DataAwsVpcEndpointServiceTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.serviceType">serviceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `acceptanceRequired`<sup>Required</sup> <a name="acceptanceRequired" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.acceptanceRequired"></a>

```typescript
public readonly acceptanceRequired: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

---

##### `baseEndpointDnsNames`<sup>Required</sup> <a name="baseEndpointDnsNames" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.baseEndpointDnsNames"></a>

```typescript
public readonly baseEndpointDnsNames: string[];
```

- *Type:* string[]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.filter"></a>

```typescript
public readonly filter: DataAwsVpcEndpointServiceFilterList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterList">DataAwsVpcEndpointServiceFilterList</a>

---

##### `managesVpcEndpoints`<sup>Required</sup> <a name="managesVpcEndpoints" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.managesVpcEndpoints"></a>

```typescript
public readonly managesVpcEndpoints: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `privateDnsName`<sup>Required</sup> <a name="privateDnsName" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.privateDnsName"></a>

```typescript
public readonly privateDnsName: string;
```

- *Type:* string

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

---

##### `supportedIpAddressTypes`<sup>Required</sup> <a name="supportedIpAddressTypes" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.supportedIpAddressTypes"></a>

```typescript
public readonly supportedIpAddressTypes: string[];
```

- *Type:* string[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.timeouts"></a>

```typescript
public readonly timeouts: DataAwsVpcEndpointServiceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference">DataAwsVpcEndpointServiceTimeoutsOutputReference</a>

---

##### `vpcEndpointPolicySupported`<sup>Required</sup> <a name="vpcEndpointPolicySupported" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.vpcEndpointPolicySupported"></a>

```typescript
public readonly vpcEndpointPolicySupported: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataAwsVpcEndpointServiceFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilter">DataAwsVpcEndpointServiceFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.serviceNameInput"></a>

```typescript
public readonly serviceNameInput: string;
```

- *Type:* string

---

##### `serviceTypeInput`<sup>Optional</sup> <a name="serviceTypeInput" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.serviceTypeInput"></a>

```typescript
public readonly serviceTypeInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: DataAwsVpcEndpointServiceTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeouts">DataAwsVpcEndpointServiceTimeouts</a> | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

##### `serviceType`<sup>Required</sup> <a name="serviceType" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.serviceType"></a>

```typescript
public readonly serviceType: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsVpcEndpointServiceConfig <a name="DataAwsVpcEndpointServiceConfig" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.Initializer"></a>

```typescript
import { dataAwsVpcEndpointService } from '@cdktf/provider-aws'

const dataAwsVpcEndpointServiceConfig: dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilter">DataAwsVpcEndpointServiceFilter</a>[]</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint_service#id DataAwsVpcEndpointService#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.service">service</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint_service#service DataAwsVpcEndpointService#service}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.serviceName">serviceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint_service#service_name DataAwsVpcEndpointService#service_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.serviceType">serviceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint_service#service_type DataAwsVpcEndpointService#service_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint_service#tags DataAwsVpcEndpointService#tags}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeouts">DataAwsVpcEndpointServiceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataAwsVpcEndpointServiceFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilter">DataAwsVpcEndpointServiceFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint_service#filter DataAwsVpcEndpointService#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint_service#id DataAwsVpcEndpointService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint_service#service DataAwsVpcEndpointService#service}.

---

##### `serviceName`<sup>Optional</sup> <a name="serviceName" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint_service#service_name DataAwsVpcEndpointService#service_name}.

---

##### `serviceType`<sup>Optional</sup> <a name="serviceType" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.serviceType"></a>

```typescript
public readonly serviceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint_service#service_type DataAwsVpcEndpointService#service_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint_service#tags DataAwsVpcEndpointService#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAwsVpcEndpointServiceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeouts">DataAwsVpcEndpointServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint_service#timeouts DataAwsVpcEndpointService#timeouts}

---

### DataAwsVpcEndpointServiceFilter <a name="DataAwsVpcEndpointServiceFilter" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilter.Initializer"></a>

```typescript
import { dataAwsVpcEndpointService } from '@cdktf/provider-aws'

const dataAwsVpcEndpointServiceFilter: dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint_service#name DataAwsVpcEndpointService#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint_service#values DataAwsVpcEndpointService#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint_service#name DataAwsVpcEndpointService#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint_service#values DataAwsVpcEndpointService#values}.

---

### DataAwsVpcEndpointServiceTimeouts <a name="DataAwsVpcEndpointServiceTimeouts" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeouts.Initializer"></a>

```typescript
import { dataAwsVpcEndpointService } from '@cdktf/provider-aws'

const dataAwsVpcEndpointServiceTimeouts: dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint_service#read DataAwsVpcEndpointService#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint_service#read DataAwsVpcEndpointService#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsVpcEndpointServiceFilterList <a name="DataAwsVpcEndpointServiceFilterList" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterList.Initializer"></a>

```typescript
import { dataAwsVpcEndpointService } from '@cdktf/provider-aws'

new dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterList.get"></a>

```typescript
public get(index: number): DataAwsVpcEndpointServiceFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilter">DataAwsVpcEndpointServiceFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsVpcEndpointServiceFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilter">DataAwsVpcEndpointServiceFilter</a>[]

---


### DataAwsVpcEndpointServiceFilterOutputReference <a name="DataAwsVpcEndpointServiceFilterOutputReference" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.Initializer"></a>

```typescript
import { dataAwsVpcEndpointService } from '@cdktf/provider-aws'

new dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilter">DataAwsVpcEndpointServiceFilter</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsVpcEndpointServiceFilter | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilter">DataAwsVpcEndpointServiceFilter</a> | cdktf.IResolvable

---


### DataAwsVpcEndpointServiceTimeoutsOutputReference <a name="DataAwsVpcEndpointServiceTimeoutsOutputReference" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAwsVpcEndpointService } from '@cdktf/provider-aws'

new dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeouts">DataAwsVpcEndpointServiceTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsVpcEndpointServiceTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeouts">DataAwsVpcEndpointServiceTimeouts</a> | cdktf.IResolvable

---



