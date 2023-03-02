# `dataAwsEc2TransitGatewayMulticastDomain` Submodule <a name="`dataAwsEc2TransitGatewayMulticastDomain` Submodule" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEc2TransitGatewayMulticastDomain <a name="DataAwsEc2TransitGatewayMulticastDomain" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_multicast_domain aws_ec2_transit_gateway_multicast_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.Initializer"></a>

```typescript
import { dataAwsEc2TransitGatewayMulticastDomain } from '@cdktf/provider-aws'

new dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain(scope: Construct, id: string, config?: DataAwsEc2TransitGatewayMulticastDomainConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig">DataAwsEc2TransitGatewayMulticastDomainConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig">DataAwsEc2TransitGatewayMulticastDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.resetTransitGatewayMulticastDomainId">resetTransitGatewayMulticastDomainId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataAwsEc2TransitGatewayMulticastDomainFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilter">DataAwsEc2TransitGatewayMulticastDomainFilter</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAwsEc2TransitGatewayMulticastDomainTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeouts">DataAwsEc2TransitGatewayMulticastDomainTimeouts</a>

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTransitGatewayMulticastDomainId` <a name="resetTransitGatewayMulticastDomainId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.resetTransitGatewayMulticastDomainId"></a>

```typescript
public resetTransitGatewayMulticastDomainId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.isConstruct"></a>

```typescript
import { dataAwsEc2TransitGatewayMulticastDomain } from '@cdktf/provider-aws'

dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.isTerraformElement"></a>

```typescript
import { dataAwsEc2TransitGatewayMulticastDomain } from '@cdktf/provider-aws'

dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.isTerraformDataSource"></a>

```typescript
import { dataAwsEc2TransitGatewayMulticastDomain } from '@cdktf/provider-aws'

dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.associations">associations</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsList">DataAwsEc2TransitGatewayMulticastDomainAssociationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.autoAcceptSharedAssociations">autoAcceptSharedAssociations</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterList">DataAwsEc2TransitGatewayMulticastDomainFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.igmpv2Support">igmpv2Support</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.members">members</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersList">DataAwsEc2TransitGatewayMulticastDomainMembersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.ownerId">ownerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.sources">sources</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesList">DataAwsEc2TransitGatewayMulticastDomainSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.staticSourcesSupport">staticSourcesSupport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference">DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.transitGatewayAttachmentId">transitGatewayAttachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.transitGatewayId">transitGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilter">DataAwsEc2TransitGatewayMulticastDomainFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeouts">DataAwsEc2TransitGatewayMulticastDomainTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.transitGatewayMulticastDomainIdInput">transitGatewayMulticastDomainIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.transitGatewayMulticastDomainId">transitGatewayMulticastDomainId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `associations`<sup>Required</sup> <a name="associations" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.associations"></a>

```typescript
public readonly associations: DataAwsEc2TransitGatewayMulticastDomainAssociationsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsList">DataAwsEc2TransitGatewayMulticastDomainAssociationsList</a>

---

##### `autoAcceptSharedAssociations`<sup>Required</sup> <a name="autoAcceptSharedAssociations" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.autoAcceptSharedAssociations"></a>

```typescript
public readonly autoAcceptSharedAssociations: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.filter"></a>

```typescript
public readonly filter: DataAwsEc2TransitGatewayMulticastDomainFilterList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterList">DataAwsEc2TransitGatewayMulticastDomainFilterList</a>

---

##### `igmpv2Support`<sup>Required</sup> <a name="igmpv2Support" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.igmpv2Support"></a>

```typescript
public readonly igmpv2Support: string;
```

- *Type:* string

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.members"></a>

```typescript
public readonly members: DataAwsEc2TransitGatewayMulticastDomainMembersList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersList">DataAwsEc2TransitGatewayMulticastDomainMembersList</a>

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.ownerId"></a>

```typescript
public readonly ownerId: string;
```

- *Type:* string

---

##### `sources`<sup>Required</sup> <a name="sources" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.sources"></a>

```typescript
public readonly sources: DataAwsEc2TransitGatewayMulticastDomainSourcesList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesList">DataAwsEc2TransitGatewayMulticastDomainSourcesList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `staticSourcesSupport`<sup>Required</sup> <a name="staticSourcesSupport" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.staticSourcesSupport"></a>

```typescript
public readonly staticSourcesSupport: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.timeouts"></a>

```typescript
public readonly timeouts: DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference">DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference</a>

---

##### `transitGatewayAttachmentId`<sup>Required</sup> <a name="transitGatewayAttachmentId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.transitGatewayAttachmentId"></a>

```typescript
public readonly transitGatewayAttachmentId: string;
```

- *Type:* string

---

##### `transitGatewayId`<sup>Required</sup> <a name="transitGatewayId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.transitGatewayId"></a>

```typescript
public readonly transitGatewayId: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataAwsEc2TransitGatewayMulticastDomainFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilter">DataAwsEc2TransitGatewayMulticastDomainFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: DataAwsEc2TransitGatewayMulticastDomainTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeouts">DataAwsEc2TransitGatewayMulticastDomainTimeouts</a> | cdktf.IResolvable

---

##### `transitGatewayMulticastDomainIdInput`<sup>Optional</sup> <a name="transitGatewayMulticastDomainIdInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.transitGatewayMulticastDomainIdInput"></a>

```typescript
public readonly transitGatewayMulticastDomainIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `transitGatewayMulticastDomainId`<sup>Required</sup> <a name="transitGatewayMulticastDomainId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.transitGatewayMulticastDomainId"></a>

```typescript
public readonly transitGatewayMulticastDomainId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEc2TransitGatewayMulticastDomainAssociations <a name="DataAwsEc2TransitGatewayMulticastDomainAssociations" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociations.Initializer"></a>

```typescript
import { dataAwsEc2TransitGatewayMulticastDomain } from '@cdktf/provider-aws'

const dataAwsEc2TransitGatewayMulticastDomainAssociations: dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociations = { ... }
```


### DataAwsEc2TransitGatewayMulticastDomainConfig <a name="DataAwsEc2TransitGatewayMulticastDomainConfig" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig.Initializer"></a>

```typescript
import { dataAwsEc2TransitGatewayMulticastDomain } from '@cdktf/provider-aws'

const dataAwsEc2TransitGatewayMulticastDomainConfig: dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilter">DataAwsEc2TransitGatewayMulticastDomainFilter</a>[]</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_multicast_domain#id DataAwsEc2TransitGatewayMulticastDomain#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_multicast_domain#tags DataAwsEc2TransitGatewayMulticastDomain#tags}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeouts">DataAwsEc2TransitGatewayMulticastDomainTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig.property.transitGatewayMulticastDomainId">transitGatewayMulticastDomainId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_multicast_domain#transit_gateway_multicast_domain_id DataAwsEc2TransitGatewayMulticastDomain#transit_gateway_multicast_domain_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataAwsEc2TransitGatewayMulticastDomainFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilter">DataAwsEc2TransitGatewayMulticastDomainFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_multicast_domain#filter DataAwsEc2TransitGatewayMulticastDomain#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_multicast_domain#id DataAwsEc2TransitGatewayMulticastDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_multicast_domain#tags DataAwsEc2TransitGatewayMulticastDomain#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAwsEc2TransitGatewayMulticastDomainTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeouts">DataAwsEc2TransitGatewayMulticastDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_multicast_domain#timeouts DataAwsEc2TransitGatewayMulticastDomain#timeouts}

---

##### `transitGatewayMulticastDomainId`<sup>Optional</sup> <a name="transitGatewayMulticastDomainId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig.property.transitGatewayMulticastDomainId"></a>

```typescript
public readonly transitGatewayMulticastDomainId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_multicast_domain#transit_gateway_multicast_domain_id DataAwsEc2TransitGatewayMulticastDomain#transit_gateway_multicast_domain_id}.

---

### DataAwsEc2TransitGatewayMulticastDomainFilter <a name="DataAwsEc2TransitGatewayMulticastDomainFilter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilter.Initializer"></a>

```typescript
import { dataAwsEc2TransitGatewayMulticastDomain } from '@cdktf/provider-aws'

const dataAwsEc2TransitGatewayMulticastDomainFilter: dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_multicast_domain#name DataAwsEc2TransitGatewayMulticastDomain#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_multicast_domain#values DataAwsEc2TransitGatewayMulticastDomain#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_multicast_domain#name DataAwsEc2TransitGatewayMulticastDomain#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_multicast_domain#values DataAwsEc2TransitGatewayMulticastDomain#values}.

---

### DataAwsEc2TransitGatewayMulticastDomainMembers <a name="DataAwsEc2TransitGatewayMulticastDomainMembers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembers.Initializer"></a>

```typescript
import { dataAwsEc2TransitGatewayMulticastDomain } from '@cdktf/provider-aws'

const dataAwsEc2TransitGatewayMulticastDomainMembers: dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembers = { ... }
```


### DataAwsEc2TransitGatewayMulticastDomainSources <a name="DataAwsEc2TransitGatewayMulticastDomainSources" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSources.Initializer"></a>

```typescript
import { dataAwsEc2TransitGatewayMulticastDomain } from '@cdktf/provider-aws'

const dataAwsEc2TransitGatewayMulticastDomainSources: dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSources = { ... }
```


### DataAwsEc2TransitGatewayMulticastDomainTimeouts <a name="DataAwsEc2TransitGatewayMulticastDomainTimeouts" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeouts.Initializer"></a>

```typescript
import { dataAwsEc2TransitGatewayMulticastDomain } from '@cdktf/provider-aws'

const dataAwsEc2TransitGatewayMulticastDomainTimeouts: dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_multicast_domain#read DataAwsEc2TransitGatewayMulticastDomain#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_multicast_domain#read DataAwsEc2TransitGatewayMulticastDomain#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsEc2TransitGatewayMulticastDomainAssociationsList <a name="DataAwsEc2TransitGatewayMulticastDomainAssociationsList" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsList.Initializer"></a>

```typescript
import { dataAwsEc2TransitGatewayMulticastDomain } from '@cdktf/provider-aws'

new dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsList.get"></a>

```typescript
public get(index: number): DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference <a name="DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.Initializer"></a>

```typescript
import { dataAwsEc2TransitGatewayMulticastDomain } from '@cdktf/provider-aws'

new dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.property.transitGatewayAttachmentId">transitGatewayAttachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociations">DataAwsEc2TransitGatewayMulticastDomainAssociations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `transitGatewayAttachmentId`<sup>Required</sup> <a name="transitGatewayAttachmentId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.property.transitGatewayAttachmentId"></a>

```typescript
public readonly transitGatewayAttachmentId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsEc2TransitGatewayMulticastDomainAssociations;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociations">DataAwsEc2TransitGatewayMulticastDomainAssociations</a>

---


### DataAwsEc2TransitGatewayMulticastDomainFilterList <a name="DataAwsEc2TransitGatewayMulticastDomainFilterList" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterList.Initializer"></a>

```typescript
import { dataAwsEc2TransitGatewayMulticastDomain } from '@cdktf/provider-aws'

new dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterList.get"></a>

```typescript
public get(index: number): DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilter">DataAwsEc2TransitGatewayMulticastDomainFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsEc2TransitGatewayMulticastDomainFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilter">DataAwsEc2TransitGatewayMulticastDomainFilter</a>[]

---


### DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference <a name="DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.Initializer"></a>

```typescript
import { dataAwsEc2TransitGatewayMulticastDomain } from '@cdktf/provider-aws'

new dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilter">DataAwsEc2TransitGatewayMulticastDomainFilter</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsEc2TransitGatewayMulticastDomainFilter | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilter">DataAwsEc2TransitGatewayMulticastDomainFilter</a> | cdktf.IResolvable

---


### DataAwsEc2TransitGatewayMulticastDomainMembersList <a name="DataAwsEc2TransitGatewayMulticastDomainMembersList" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersList.Initializer"></a>

```typescript
import { dataAwsEc2TransitGatewayMulticastDomain } from '@cdktf/provider-aws'

new dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersList.get"></a>

```typescript
public get(index: number): DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference <a name="DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.Initializer"></a>

```typescript
import { dataAwsEc2TransitGatewayMulticastDomain } from '@cdktf/provider-aws'

new dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.property.groupIpAddress">groupIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.property.networkInterfaceId">networkInterfaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembers">DataAwsEc2TransitGatewayMulticastDomainMembers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `groupIpAddress`<sup>Required</sup> <a name="groupIpAddress" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.property.groupIpAddress"></a>

```typescript
public readonly groupIpAddress: string;
```

- *Type:* string

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.property.networkInterfaceId"></a>

```typescript
public readonly networkInterfaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsEc2TransitGatewayMulticastDomainMembers;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembers">DataAwsEc2TransitGatewayMulticastDomainMembers</a>

---


### DataAwsEc2TransitGatewayMulticastDomainSourcesList <a name="DataAwsEc2TransitGatewayMulticastDomainSourcesList" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesList.Initializer"></a>

```typescript
import { dataAwsEc2TransitGatewayMulticastDomain } from '@cdktf/provider-aws'

new dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesList.get"></a>

```typescript
public get(index: number): DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference <a name="DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.Initializer"></a>

```typescript
import { dataAwsEc2TransitGatewayMulticastDomain } from '@cdktf/provider-aws'

new dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.property.groupIpAddress">groupIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.property.networkInterfaceId">networkInterfaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSources">DataAwsEc2TransitGatewayMulticastDomainSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `groupIpAddress`<sup>Required</sup> <a name="groupIpAddress" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.property.groupIpAddress"></a>

```typescript
public readonly groupIpAddress: string;
```

- *Type:* string

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.property.networkInterfaceId"></a>

```typescript
public readonly networkInterfaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsEc2TransitGatewayMulticastDomainSources;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSources">DataAwsEc2TransitGatewayMulticastDomainSources</a>

---


### DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference <a name="DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAwsEc2TransitGatewayMulticastDomain } from '@cdktf/provider-aws'

new dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeouts">DataAwsEc2TransitGatewayMulticastDomainTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsEc2TransitGatewayMulticastDomainTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeouts">DataAwsEc2TransitGatewayMulticastDomainTimeouts</a> | cdktf.IResolvable

---



