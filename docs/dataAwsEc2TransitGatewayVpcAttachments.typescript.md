# `dataAwsEc2TransitGatewayVpcAttachments` Submodule <a name="`dataAwsEc2TransitGatewayVpcAttachments` Submodule" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEc2TransitGatewayVpcAttachments <a name="DataAwsEc2TransitGatewayVpcAttachments" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpc_attachments aws_ec2_transit_gateway_vpc_attachments}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.Initializer"></a>

```typescript
import { dataAwsEc2TransitGatewayVpcAttachments } from '@cdktf/provider-aws'

new dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments(scope: Construct, id: string, config?: DataAwsEc2TransitGatewayVpcAttachmentsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsConfig">DataAwsEc2TransitGatewayVpcAttachmentsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsConfig">DataAwsEc2TransitGatewayVpcAttachmentsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataAwsEc2TransitGatewayVpcAttachmentsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilter">DataAwsEc2TransitGatewayVpcAttachmentsFilter</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAwsEc2TransitGatewayVpcAttachmentsTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeouts">DataAwsEc2TransitGatewayVpcAttachmentsTimeouts</a>

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.isConstruct"></a>

```typescript
import { dataAwsEc2TransitGatewayVpcAttachments } from '@cdktf/provider-aws'

dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.isTerraformElement"></a>

```typescript
import { dataAwsEc2TransitGatewayVpcAttachments } from '@cdktf/provider-aws'

dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.isTerraformDataSource"></a>

```typescript
import { dataAwsEc2TransitGatewayVpcAttachments } from '@cdktf/provider-aws'

dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterList">DataAwsEc2TransitGatewayVpcAttachmentsFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.ids">ids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference">DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilter">DataAwsEc2TransitGatewayVpcAttachmentsFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeouts">DataAwsEc2TransitGatewayVpcAttachmentsTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.filter"></a>

```typescript
public readonly filter: DataAwsEc2TransitGatewayVpcAttachmentsFilterList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterList">DataAwsEc2TransitGatewayVpcAttachmentsFilterList</a>

---

##### `ids`<sup>Required</sup> <a name="ids" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.ids"></a>

```typescript
public readonly ids: string[];
```

- *Type:* string[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.timeouts"></a>

```typescript
public readonly timeouts: DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference">DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataAwsEc2TransitGatewayVpcAttachmentsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilter">DataAwsEc2TransitGatewayVpcAttachmentsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: DataAwsEc2TransitGatewayVpcAttachmentsTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeouts">DataAwsEc2TransitGatewayVpcAttachmentsTimeouts</a> | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEc2TransitGatewayVpcAttachmentsConfig <a name="DataAwsEc2TransitGatewayVpcAttachmentsConfig" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsConfig.Initializer"></a>

```typescript
import { dataAwsEc2TransitGatewayVpcAttachments } from '@cdktf/provider-aws'

const dataAwsEc2TransitGatewayVpcAttachmentsConfig: dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilter">DataAwsEc2TransitGatewayVpcAttachmentsFilter</a>[]</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpc_attachments#id DataAwsEc2TransitGatewayVpcAttachments#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeouts">DataAwsEc2TransitGatewayVpcAttachmentsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataAwsEc2TransitGatewayVpcAttachmentsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilter">DataAwsEc2TransitGatewayVpcAttachmentsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpc_attachments#filter DataAwsEc2TransitGatewayVpcAttachments#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpc_attachments#id DataAwsEc2TransitGatewayVpcAttachments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAwsEc2TransitGatewayVpcAttachmentsTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeouts">DataAwsEc2TransitGatewayVpcAttachmentsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpc_attachments#timeouts DataAwsEc2TransitGatewayVpcAttachments#timeouts}

---

### DataAwsEc2TransitGatewayVpcAttachmentsFilter <a name="DataAwsEc2TransitGatewayVpcAttachmentsFilter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilter.Initializer"></a>

```typescript
import { dataAwsEc2TransitGatewayVpcAttachments } from '@cdktf/provider-aws'

const dataAwsEc2TransitGatewayVpcAttachmentsFilter: dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpc_attachments#name DataAwsEc2TransitGatewayVpcAttachments#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpc_attachments#values DataAwsEc2TransitGatewayVpcAttachments#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpc_attachments#name DataAwsEc2TransitGatewayVpcAttachments#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpc_attachments#values DataAwsEc2TransitGatewayVpcAttachments#values}.

---

### DataAwsEc2TransitGatewayVpcAttachmentsTimeouts <a name="DataAwsEc2TransitGatewayVpcAttachmentsTimeouts" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeouts.Initializer"></a>

```typescript
import { dataAwsEc2TransitGatewayVpcAttachments } from '@cdktf/provider-aws'

const dataAwsEc2TransitGatewayVpcAttachmentsTimeouts: dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpc_attachments#read DataAwsEc2TransitGatewayVpcAttachments#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpc_attachments#read DataAwsEc2TransitGatewayVpcAttachments#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsEc2TransitGatewayVpcAttachmentsFilterList <a name="DataAwsEc2TransitGatewayVpcAttachmentsFilterList" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterList.Initializer"></a>

```typescript
import { dataAwsEc2TransitGatewayVpcAttachments } from '@cdktf/provider-aws'

new dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterList.get"></a>

```typescript
public get(index: number): DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilter">DataAwsEc2TransitGatewayVpcAttachmentsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsEc2TransitGatewayVpcAttachmentsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilter">DataAwsEc2TransitGatewayVpcAttachmentsFilter</a>[]

---


### DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference <a name="DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.Initializer"></a>

```typescript
import { dataAwsEc2TransitGatewayVpcAttachments } from '@cdktf/provider-aws'

new dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilter">DataAwsEc2TransitGatewayVpcAttachmentsFilter</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsEc2TransitGatewayVpcAttachmentsFilter | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilter">DataAwsEc2TransitGatewayVpcAttachmentsFilter</a> | cdktf.IResolvable

---


### DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference <a name="DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAwsEc2TransitGatewayVpcAttachments } from '@cdktf/provider-aws'

new dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeouts">DataAwsEc2TransitGatewayVpcAttachmentsTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsEc2TransitGatewayVpcAttachmentsTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeouts">DataAwsEc2TransitGatewayVpcAttachmentsTimeouts</a> | cdktf.IResolvable

---



