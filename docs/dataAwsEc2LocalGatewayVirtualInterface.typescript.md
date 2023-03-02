# `dataAwsEc2LocalGatewayVirtualInterface` Submodule <a name="`dataAwsEc2LocalGatewayVirtualInterface` Submodule" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEc2LocalGatewayVirtualInterface <a name="DataAwsEc2LocalGatewayVirtualInterface" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface aws_ec2_local_gateway_virtual_interface}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.Initializer"></a>

```typescript
import { dataAwsEc2LocalGatewayVirtualInterface } from '@cdktf/provider-aws'

new dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface(scope: Construct, id: string, config?: DataAwsEc2LocalGatewayVirtualInterfaceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceConfig">DataAwsEc2LocalGatewayVirtualInterfaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceConfig">DataAwsEc2LocalGatewayVirtualInterfaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataAwsEc2LocalGatewayVirtualInterfaceFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilter">DataAwsEc2LocalGatewayVirtualInterfaceFilter</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAwsEc2LocalGatewayVirtualInterfaceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeouts">DataAwsEc2LocalGatewayVirtualInterfaceTimeouts</a>

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.isConstruct"></a>

```typescript
import { dataAwsEc2LocalGatewayVirtualInterface } from '@cdktf/provider-aws'

dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.isTerraformElement"></a>

```typescript
import { dataAwsEc2LocalGatewayVirtualInterface } from '@cdktf/provider-aws'

dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.isTerraformDataSource"></a>

```typescript
import { dataAwsEc2LocalGatewayVirtualInterface } from '@cdktf/provider-aws'

dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList">DataAwsEc2LocalGatewayVirtualInterfaceFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.localAddress">localAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.localBgpAsn">localBgpAsn</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.localGatewayId">localGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.localGatewayVirtualInterfaceIds">localGatewayVirtualInterfaceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.peerAddress">peerAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.peerBgpAsn">peerBgpAsn</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference">DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.vlan">vlan</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilter">DataAwsEc2LocalGatewayVirtualInterfaceFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeouts">DataAwsEc2LocalGatewayVirtualInterfaceTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.filter"></a>

```typescript
public readonly filter: DataAwsEc2LocalGatewayVirtualInterfaceFilterList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList">DataAwsEc2LocalGatewayVirtualInterfaceFilterList</a>

---

##### `localAddress`<sup>Required</sup> <a name="localAddress" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.localAddress"></a>

```typescript
public readonly localAddress: string;
```

- *Type:* string

---

##### `localBgpAsn`<sup>Required</sup> <a name="localBgpAsn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.localBgpAsn"></a>

```typescript
public readonly localBgpAsn: number;
```

- *Type:* number

---

##### `localGatewayId`<sup>Required</sup> <a name="localGatewayId" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.localGatewayId"></a>

```typescript
public readonly localGatewayId: string;
```

- *Type:* string

---

##### `localGatewayVirtualInterfaceIds`<sup>Required</sup> <a name="localGatewayVirtualInterfaceIds" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.localGatewayVirtualInterfaceIds"></a>

```typescript
public readonly localGatewayVirtualInterfaceIds: string[];
```

- *Type:* string[]

---

##### `peerAddress`<sup>Required</sup> <a name="peerAddress" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.peerAddress"></a>

```typescript
public readonly peerAddress: string;
```

- *Type:* string

---

##### `peerBgpAsn`<sup>Required</sup> <a name="peerBgpAsn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.peerBgpAsn"></a>

```typescript
public readonly peerBgpAsn: number;
```

- *Type:* number

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.timeouts"></a>

```typescript
public readonly timeouts: DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference">DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference</a>

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.vlan"></a>

```typescript
public readonly vlan: number;
```

- *Type:* number

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataAwsEc2LocalGatewayVirtualInterfaceFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilter">DataAwsEc2LocalGatewayVirtualInterfaceFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: DataAwsEc2LocalGatewayVirtualInterfaceTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeouts">DataAwsEc2LocalGatewayVirtualInterfaceTimeouts</a> | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEc2LocalGatewayVirtualInterfaceConfig <a name="DataAwsEc2LocalGatewayVirtualInterfaceConfig" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceConfig.Initializer"></a>

```typescript
import { dataAwsEc2LocalGatewayVirtualInterface } from '@cdktf/provider-aws'

const dataAwsEc2LocalGatewayVirtualInterfaceConfig: dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilter">DataAwsEc2LocalGatewayVirtualInterfaceFilter</a>[]</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface#id DataAwsEc2LocalGatewayVirtualInterface#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface#tags DataAwsEc2LocalGatewayVirtualInterface#tags}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeouts">DataAwsEc2LocalGatewayVirtualInterfaceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataAwsEc2LocalGatewayVirtualInterfaceFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilter">DataAwsEc2LocalGatewayVirtualInterfaceFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface#filter DataAwsEc2LocalGatewayVirtualInterface#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface#id DataAwsEc2LocalGatewayVirtualInterface#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface#tags DataAwsEc2LocalGatewayVirtualInterface#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAwsEc2LocalGatewayVirtualInterfaceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeouts">DataAwsEc2LocalGatewayVirtualInterfaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface#timeouts DataAwsEc2LocalGatewayVirtualInterface#timeouts}

---

### DataAwsEc2LocalGatewayVirtualInterfaceFilter <a name="DataAwsEc2LocalGatewayVirtualInterfaceFilter" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilter.Initializer"></a>

```typescript
import { dataAwsEc2LocalGatewayVirtualInterface } from '@cdktf/provider-aws'

const dataAwsEc2LocalGatewayVirtualInterfaceFilter: dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface#name DataAwsEc2LocalGatewayVirtualInterface#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface#values DataAwsEc2LocalGatewayVirtualInterface#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface#name DataAwsEc2LocalGatewayVirtualInterface#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface#values DataAwsEc2LocalGatewayVirtualInterface#values}.

---

### DataAwsEc2LocalGatewayVirtualInterfaceTimeouts <a name="DataAwsEc2LocalGatewayVirtualInterfaceTimeouts" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeouts.Initializer"></a>

```typescript
import { dataAwsEc2LocalGatewayVirtualInterface } from '@cdktf/provider-aws'

const dataAwsEc2LocalGatewayVirtualInterfaceTimeouts: dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface#read DataAwsEc2LocalGatewayVirtualInterface#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface#read DataAwsEc2LocalGatewayVirtualInterface#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsEc2LocalGatewayVirtualInterfaceFilterList <a name="DataAwsEc2LocalGatewayVirtualInterfaceFilterList" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList.Initializer"></a>

```typescript
import { dataAwsEc2LocalGatewayVirtualInterface } from '@cdktf/provider-aws'

new dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList.get"></a>

```typescript
public get(index: number): DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilter">DataAwsEc2LocalGatewayVirtualInterfaceFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsEc2LocalGatewayVirtualInterfaceFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilter">DataAwsEc2LocalGatewayVirtualInterfaceFilter</a>[]

---


### DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference <a name="DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.Initializer"></a>

```typescript
import { dataAwsEc2LocalGatewayVirtualInterface } from '@cdktf/provider-aws'

new dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilter">DataAwsEc2LocalGatewayVirtualInterfaceFilter</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsEc2LocalGatewayVirtualInterfaceFilter | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilter">DataAwsEc2LocalGatewayVirtualInterfaceFilter</a> | cdktf.IResolvable

---


### DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference <a name="DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAwsEc2LocalGatewayVirtualInterface } from '@cdktf/provider-aws'

new dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeouts">DataAwsEc2LocalGatewayVirtualInterfaceTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsEc2LocalGatewayVirtualInterfaceTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeouts">DataAwsEc2LocalGatewayVirtualInterfaceTimeouts</a> | cdktf.IResolvable

---



