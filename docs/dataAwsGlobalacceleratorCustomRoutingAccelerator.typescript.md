# `data_aws_globalaccelerator_custom_routing_accelerator`

Refer to the Terraform Registory for docs: [`data_aws_globalaccelerator_custom_routing_accelerator`](https://registry.terraform.io/providers/hashicorp/aws/4.66.0/docs/data-sources/globalaccelerator_custom_routing_accelerator).

# `dataAwsGlobalacceleratorCustomRoutingAccelerator` Submodule <a name="`dataAwsGlobalacceleratorCustomRoutingAccelerator` Submodule" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsGlobalacceleratorCustomRoutingAccelerator <a name="DataAwsGlobalacceleratorCustomRoutingAccelerator" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.0/docs/data-sources/globalaccelerator_custom_routing_accelerator aws_globalaccelerator_custom_routing_accelerator}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.Initializer"></a>

```typescript
import { dataAwsGlobalacceleratorCustomRoutingAccelerator } from '@cdktf/provider-aws'

new dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator(scope: Construct, id: string, config?: DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig">DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig">DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.resetArn">resetArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetArn` <a name="resetArn" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.resetArn"></a>

```typescript
public resetArn(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.resetName"></a>

```typescript
public resetName(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.isConstruct"></a>

```typescript
import { dataAwsGlobalacceleratorCustomRoutingAccelerator } from '@cdktf/provider-aws'

dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.isTerraformElement"></a>

```typescript
import { dataAwsGlobalacceleratorCustomRoutingAccelerator } from '@cdktf/provider-aws'

dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.isTerraformDataSource"></a>

```typescript
import { dataAwsGlobalacceleratorCustomRoutingAccelerator } from '@cdktf/provider-aws'

dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.attributes">attributes</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList">DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.dnsName">dnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.hostedZoneId">hostedZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.ipAddressType">ipAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.ipSets">ipSets</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList">DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.arnInput">arnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.attributes"></a>

```typescript
public readonly attributes: DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList">DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList</a>

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.dnsName"></a>

```typescript
public readonly dnsName: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `hostedZoneId`<sup>Required</sup> <a name="hostedZoneId" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.hostedZoneId"></a>

```typescript
public readonly hostedZoneId: string;
```

- *Type:* string

---

##### `ipAddressType`<sup>Required</sup> <a name="ipAddressType" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: string;
```

- *Type:* string

---

##### `ipSets`<sup>Required</sup> <a name="ipSets" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.ipSets"></a>

```typescript
public readonly ipSets: DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList">DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList</a>

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.arnInput"></a>

```typescript
public readonly arnInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributes <a name="DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributes" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributes.Initializer"></a>

```typescript
import { dataAwsGlobalacceleratorCustomRoutingAccelerator } from '@cdktf/provider-aws'

const dataAwsGlobalacceleratorCustomRoutingAcceleratorAttributes: dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributes = { ... }
```


### DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig <a name="DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig.Initializer"></a>

```typescript
import { dataAwsGlobalacceleratorCustomRoutingAccelerator } from '@cdktf/provider-aws'

const dataAwsGlobalacceleratorCustomRoutingAcceleratorConfig: dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig.property.arn">arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.0/docs/data-sources/globalaccelerator_custom_routing_accelerator#arn DataAwsGlobalacceleratorCustomRoutingAccelerator#arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.0/docs/data-sources/globalaccelerator_custom_routing_accelerator#id DataAwsGlobalacceleratorCustomRoutingAccelerator#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.0/docs/data-sources/globalaccelerator_custom_routing_accelerator#name DataAwsGlobalacceleratorCustomRoutingAccelerator#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.0/docs/data-sources/globalaccelerator_custom_routing_accelerator#tags DataAwsGlobalacceleratorCustomRoutingAccelerator#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.0/docs/data-sources/globalaccelerator_custom_routing_accelerator#arn DataAwsGlobalacceleratorCustomRoutingAccelerator#arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.0/docs/data-sources/globalaccelerator_custom_routing_accelerator#id DataAwsGlobalacceleratorCustomRoutingAccelerator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.0/docs/data-sources/globalaccelerator_custom_routing_accelerator#name DataAwsGlobalacceleratorCustomRoutingAccelerator#name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.0/docs/data-sources/globalaccelerator_custom_routing_accelerator#tags DataAwsGlobalacceleratorCustomRoutingAccelerator#tags}.

---

### DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSets <a name="DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSets" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSets.Initializer"></a>

```typescript
import { dataAwsGlobalacceleratorCustomRoutingAccelerator } from '@cdktf/provider-aws'

const dataAwsGlobalacceleratorCustomRoutingAcceleratorIpSets: dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSets = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList <a name="DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList.Initializer"></a>

```typescript
import { dataAwsGlobalacceleratorCustomRoutingAccelerator } from '@cdktf/provider-aws'

new dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList.get"></a>

```typescript
public get(index: number): DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference <a name="DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.Initializer"></a>

```typescript
import { dataAwsGlobalacceleratorCustomRoutingAccelerator } from '@cdktf/provider-aws'

new dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.property.flowLogsEnabled">flowLogsEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.property.flowLogsS3Bucket">flowLogsS3Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.property.flowLogsS3Prefix">flowLogsS3Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributes">DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `flowLogsEnabled`<sup>Required</sup> <a name="flowLogsEnabled" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.property.flowLogsEnabled"></a>

```typescript
public readonly flowLogsEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `flowLogsS3Bucket`<sup>Required</sup> <a name="flowLogsS3Bucket" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.property.flowLogsS3Bucket"></a>

```typescript
public readonly flowLogsS3Bucket: string;
```

- *Type:* string

---

##### `flowLogsS3Prefix`<sup>Required</sup> <a name="flowLogsS3Prefix" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.property.flowLogsS3Prefix"></a>

```typescript
public readonly flowLogsS3Prefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributes;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributes">DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributes</a>

---


### DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList <a name="DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList.Initializer"></a>

```typescript
import { dataAwsGlobalacceleratorCustomRoutingAccelerator } from '@cdktf/provider-aws'

new dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList.get"></a>

```typescript
public get(index: number): DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference <a name="DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.Initializer"></a>

```typescript
import { dataAwsGlobalacceleratorCustomRoutingAccelerator } from '@cdktf/provider-aws'

new dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.property.ipAddresses">ipAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.property.ipFamily">ipFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSets">DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipAddresses`<sup>Required</sup> <a name="ipAddresses" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.property.ipAddresses"></a>

```typescript
public readonly ipAddresses: string[];
```

- *Type:* string[]

---

##### `ipFamily`<sup>Required</sup> <a name="ipFamily" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.property.ipFamily"></a>

```typescript
public readonly ipFamily: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSets;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSets">DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSets</a>

---



