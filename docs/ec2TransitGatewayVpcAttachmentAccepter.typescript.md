# `ec2TransitGatewayVpcAttachmentAccepter` Submodule <a name="`ec2TransitGatewayVpcAttachmentAccepter` Submodule" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2TransitGatewayVpcAttachmentAccepter <a name="Ec2TransitGatewayVpcAttachmentAccepter" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment_accepter aws_ec2_transit_gateway_vpc_attachment_accepter}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.Initializer"></a>

```typescript
import { ec2TransitGatewayVpcAttachmentAccepter } from '@cdktf/provider-aws'

new ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter(scope: Construct, id: string, config: Ec2TransitGatewayVpcAttachmentAccepterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig">Ec2TransitGatewayVpcAttachmentAccepterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig">Ec2TransitGatewayVpcAttachmentAccepterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.resetTransitGatewayDefaultRouteTableAssociation">resetTransitGatewayDefaultRouteTableAssociation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.resetTransitGatewayDefaultRouteTablePropagation">resetTransitGatewayDefaultRouteTablePropagation</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTransitGatewayDefaultRouteTableAssociation` <a name="resetTransitGatewayDefaultRouteTableAssociation" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.resetTransitGatewayDefaultRouteTableAssociation"></a>

```typescript
public resetTransitGatewayDefaultRouteTableAssociation(): void
```

##### `resetTransitGatewayDefaultRouteTablePropagation` <a name="resetTransitGatewayDefaultRouteTablePropagation" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.resetTransitGatewayDefaultRouteTablePropagation"></a>

```typescript
public resetTransitGatewayDefaultRouteTablePropagation(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.isConstruct"></a>

```typescript
import { ec2TransitGatewayVpcAttachmentAccepter } from '@cdktf/provider-aws'

ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.isTerraformElement"></a>

```typescript
import { ec2TransitGatewayVpcAttachmentAccepter } from '@cdktf/provider-aws'

ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.isTerraformResource"></a>

```typescript
import { ec2TransitGatewayVpcAttachmentAccepter } from '@cdktf/provider-aws'

ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.applianceModeSupport">applianceModeSupport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.dnsSupport">dnsSupport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.ipv6Support">ipv6Support</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.transitGatewayId">transitGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.vpcOwnerId">vpcOwnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.transitGatewayAttachmentIdInput">transitGatewayAttachmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.transitGatewayDefaultRouteTableAssociationInput">transitGatewayDefaultRouteTableAssociationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.transitGatewayDefaultRouteTablePropagationInput">transitGatewayDefaultRouteTablePropagationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.transitGatewayAttachmentId">transitGatewayAttachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.transitGatewayDefaultRouteTableAssociation">transitGatewayDefaultRouteTableAssociation</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.transitGatewayDefaultRouteTablePropagation">transitGatewayDefaultRouteTablePropagation</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `applianceModeSupport`<sup>Required</sup> <a name="applianceModeSupport" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.applianceModeSupport"></a>

```typescript
public readonly applianceModeSupport: string;
```

- *Type:* string

---

##### `dnsSupport`<sup>Required</sup> <a name="dnsSupport" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.dnsSupport"></a>

```typescript
public readonly dnsSupport: string;
```

- *Type:* string

---

##### `ipv6Support`<sup>Required</sup> <a name="ipv6Support" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.ipv6Support"></a>

```typescript
public readonly ipv6Support: string;
```

- *Type:* string

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `transitGatewayId`<sup>Required</sup> <a name="transitGatewayId" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.transitGatewayId"></a>

```typescript
public readonly transitGatewayId: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `vpcOwnerId`<sup>Required</sup> <a name="vpcOwnerId" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.vpcOwnerId"></a>

```typescript
public readonly vpcOwnerId: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `transitGatewayAttachmentIdInput`<sup>Optional</sup> <a name="transitGatewayAttachmentIdInput" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.transitGatewayAttachmentIdInput"></a>

```typescript
public readonly transitGatewayAttachmentIdInput: string;
```

- *Type:* string

---

##### `transitGatewayDefaultRouteTableAssociationInput`<sup>Optional</sup> <a name="transitGatewayDefaultRouteTableAssociationInput" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.transitGatewayDefaultRouteTableAssociationInput"></a>

```typescript
public readonly transitGatewayDefaultRouteTableAssociationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `transitGatewayDefaultRouteTablePropagationInput`<sup>Optional</sup> <a name="transitGatewayDefaultRouteTablePropagationInput" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.transitGatewayDefaultRouteTablePropagationInput"></a>

```typescript
public readonly transitGatewayDefaultRouteTablePropagationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `transitGatewayAttachmentId`<sup>Required</sup> <a name="transitGatewayAttachmentId" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.transitGatewayAttachmentId"></a>

```typescript
public readonly transitGatewayAttachmentId: string;
```

- *Type:* string

---

##### `transitGatewayDefaultRouteTableAssociation`<sup>Required</sup> <a name="transitGatewayDefaultRouteTableAssociation" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.transitGatewayDefaultRouteTableAssociation"></a>

```typescript
public readonly transitGatewayDefaultRouteTableAssociation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `transitGatewayDefaultRouteTablePropagation`<sup>Required</sup> <a name="transitGatewayDefaultRouteTablePropagation" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.transitGatewayDefaultRouteTablePropagation"></a>

```typescript
public readonly transitGatewayDefaultRouteTablePropagation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2TransitGatewayVpcAttachmentAccepterConfig <a name="Ec2TransitGatewayVpcAttachmentAccepterConfig" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig.Initializer"></a>

```typescript
import { ec2TransitGatewayVpcAttachmentAccepter } from '@cdktf/provider-aws'

const ec2TransitGatewayVpcAttachmentAccepterConfig: ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig.property.transitGatewayAttachmentId">transitGatewayAttachmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment_accepter#transit_gateway_attachment_id Ec2TransitGatewayVpcAttachmentAccepter#transit_gateway_attachment_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment_accepter#id Ec2TransitGatewayVpcAttachmentAccepter#id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment_accepter#tags Ec2TransitGatewayVpcAttachmentAccepter#tags}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment_accepter#tags_all Ec2TransitGatewayVpcAttachmentAccepter#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig.property.transitGatewayDefaultRouteTableAssociation">transitGatewayDefaultRouteTableAssociation</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment_accepter#transit_gateway_default_route_table_association Ec2TransitGatewayVpcAttachmentAccepter#transit_gateway_default_route_table_association}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig.property.transitGatewayDefaultRouteTablePropagation">transitGatewayDefaultRouteTablePropagation</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment_accepter#transit_gateway_default_route_table_propagation Ec2TransitGatewayVpcAttachmentAccepter#transit_gateway_default_route_table_propagation}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `transitGatewayAttachmentId`<sup>Required</sup> <a name="transitGatewayAttachmentId" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig.property.transitGatewayAttachmentId"></a>

```typescript
public readonly transitGatewayAttachmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment_accepter#transit_gateway_attachment_id Ec2TransitGatewayVpcAttachmentAccepter#transit_gateway_attachment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment_accepter#id Ec2TransitGatewayVpcAttachmentAccepter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment_accepter#tags Ec2TransitGatewayVpcAttachmentAccepter#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment_accepter#tags_all Ec2TransitGatewayVpcAttachmentAccepter#tags_all}.

---

##### `transitGatewayDefaultRouteTableAssociation`<sup>Optional</sup> <a name="transitGatewayDefaultRouteTableAssociation" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig.property.transitGatewayDefaultRouteTableAssociation"></a>

```typescript
public readonly transitGatewayDefaultRouteTableAssociation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment_accepter#transit_gateway_default_route_table_association Ec2TransitGatewayVpcAttachmentAccepter#transit_gateway_default_route_table_association}.

---

##### `transitGatewayDefaultRouteTablePropagation`<sup>Optional</sup> <a name="transitGatewayDefaultRouteTablePropagation" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig.property.transitGatewayDefaultRouteTablePropagation"></a>

```typescript
public readonly transitGatewayDefaultRouteTablePropagation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment_accepter#transit_gateway_default_route_table_propagation Ec2TransitGatewayVpcAttachmentAccepter#transit_gateway_default_route_table_propagation}.

---



